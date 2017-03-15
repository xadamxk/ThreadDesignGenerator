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
    var output = "";

    // Font from general

    // Alignment Start
    output += "[align=";
    if ($("#descriptionAlignLeft").prop("checked"))
        output += "left";
    else if ($("#descriptionAlignCenter").prop("checked"))
        output += "center";
    else if ($("#descriptionAlignRight").prop("checked"))
        output += "right";
    output += "]";

    // Label Size Start
    output += "[size=";
    if ($("#descriptionLabelSizeXXS").prop("checked"))
        output += "xx-small";
    else if ($("#descriptionLabelSizeXS").prop("checked"))
        output += "x-small";
    else if ($("#descriptionLabelSizeS").prop("checked"))
        output += "small";
    else if ($("#descriptionLabelSizeM").prop("checked"))
        output += "medium";
    else if ($("#descriptionLabelSizeL").prop("checked"))
        output += "large";
    else if ($("#descriptionLabelSizeXL").prop("checked"))
        output += "x-large";
    else if ($("#descriptionLabelSizeXXL").prop("checked"))
        output += "xx-large";
    output += "]"

    // Label Color Start
    output += "[color=" + $("#descriptionCPLabel").colorpicker('getValue') + "]";

    // Description Label
    output += $("#descriptionHeaderLabel").val();

    // Label Color End
    output += "[/color]";

    // Label Size End
    output += "[/size]\n";

    // Description Paragraph
    if ($("#descriptionEnableParagraph").prop("checked")) {
        // Text Size Start
        output += "[size=";
        if ($("#descriptionTextSizeXXS").prop("checked"))
            output += "xx-small";
        else if ($("#descriptionTextSizeXS").prop("checked"))
            output += "x-small";
        else if ($("#descriptionTextSizeS").prop("checked"))
            output += "small";
        else if ($("#descriptionTextSizeM").prop("checked"))
            output += "medium";
        else if ($("#descriptionTextSizeL").prop("checked"))
            output += "large";
        else if ($("#descriptionTextSizeXL").prop("checked"))
            output += "x-large";
        else if ($("#descriptionTextSizeXXL").prop("checked"))
            output += "xx-large";
        output += "]"

        // Info Color Start
        output += "[color=" + $("#descriptionCPInfo").colorpicker('getValue') + "]";
        // Description Paragraph
        output += $("#descriptionText").val();
        // Info Color End
        output += "[/color]";
        // Text Size End
        output += "[/size]";
    }
    // Description List
    if ($("#descriptionEnableList").prop("checked")) {
        // Text Size Start
        output += "[size=";
        if ($("#descriptionTextSizeXXS").prop("checked"))
            output += "xx-small";
        else if ($("#descriptionTextSizeXS").prop("checked"))
            output += "x-small";
        else if ($("#descriptionTextSizeS").prop("checked"))
            output += "small";
        else if ($("#descriptionTextSizeM").prop("checked"))
            output += "medium";
        else if ($("#descriptionTextSizeL").prop("checked"))
            output += "large";
        else if ($("#descriptionTextSizeXL").prop("checked"))
            output += "x-large";
        else if ($("#descriptionTextSizeXXL").prop("checked"))
            output += "xx-large";
        output += "]"
        // List Start
        output += "[list]";
        // Features List
        $(".repeatedDescription").each(function (index) {
            // Bullet Color Start
            output += "[color=" + $("#descriptionCPBullet").colorpicker('getValue') + "]";
            // Bullet Style
            output += $("#descriptionBulletDropdown").find(":selected").text();
            // Bullet Color End
            output += "[/color] ";
            // Info Color Start
            output += "[color=" + $("#descriptionCPInfo").colorpicker('getValue') + "]";
            // Description Lists
            output += $(this).val() + "\n";
            // Info Color End
            output += "[/color]";
        });

        // List End
        output += "[/list]";

        // Text Size End
        output += "[/size]";
    }

    // Align End
    output += "[/align]";

    return output;
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
    output += "[/size]";

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

    // List Start
    output += "[list]";

    // Features List
    $(".repeatedFeature").each(function (index) {
        // Bullet Color Start
        output += "[color=" + $("#featuresCPBullet").colorpicker('getValue') + "]";
        // Bullet Style
        output += $("#featuresBulletDropdown").find(":selected").text();
        // Bullet Color End
        output += "[/color] ";
        // Info Color Start
        output += "[color=" + $("#featuresCPInfo").colorpicker('getValue') + "]";
        // Feature
        output += $(this).val() + "\n";
        // Info Color End
        output += "[/color]";
    });

    // List End
    output += "[/list]";

    // Info Size End
    output += "[/size]";

    // Align End
    output += "[/align]";

    return output;
}

// Layout 1 - Products
function updateProductsOutput() {
    var output = "";

    // Font from general

    // Alignment Start
    output += "[align=";
    if ($("#productsAlignLeft").prop("checked"))
        output += "left";
    else if ($("#productsAlignCenter").prop("checked"))
        output += "center";
    else if ($("#productsAlignRight").prop("checked"))
        output += "right";
    output += "]";

    // Label Size Start
    output += "[size=";
    if ($("#productsLabelSizeXXS").prop("checked"))
        output += "xx-small";
    else if ($("#productsLabelSizeXS").prop("checked"))
        output += "x-small";
    else if ($("#productsLabelSizeS").prop("checked"))
        output += "small";
    else if ($("#productsLabelSizeM").prop("checked"))
        output += "medium";
    else if ($("#productsLabelSizeL").prop("checked"))
        output += "large";
    else if ($("#productsLabelSizeXL").prop("checked"))
        output += "x-large";
    else if ($("#productsLabelSizeXXL").prop("checked"))
        output += "xx-large";
    output += "]"

    // Label Color Start
    output += "[color=" + $("#productsCPLabel").colorpicker('getValue') + "]";

    // Contact Label
    output += $("#productsHeaderLabel").val();

    // Label Color End
    output += "[/color]";

    // Label Size End
    output += "[/size]";

    // List Start
    output += "[list]";

    // Product List
    $(".repeatedProducts").each(function (index) {
        console.log("num repeated products: " + (index+1));
        // Product Link Start
        if ($(".repeatedProdLink:eq(" + index + ")").val().length > 0) {
            output += "[url=" + $(".repeatedProdLink:eq(" + index + ")").val() + "]";
        }

        // Product Label Size Start
        output += "[size=";
        if ($("#productsLabelSizeXXS").prop("checked"))
            output += "xx-small";
        else if ($("#productsLabelSizeXS").prop("checked"))
            output += "x-small";
        else if ($("#productsLabelSizeS").prop("checked"))
            output += "small";
        else if ($("#productsLabelSizeM").prop("checked"))
            output += "medium";
        else if ($("#productsLabelSizeL").prop("checked"))
            output += "large";
        else if ($("#productsLabelSizeXL").prop("checked"))
            output += "x-large";
        else if ($("#productsLabelSizeXXL").prop("checked"))
            output += "xx-large";
        output += "]"

        // Product Name Color Start 
        output += "[color=" + $("#productsCPInfo").colorpicker('getValue') + "]";

        // Product Name
        output += $(".repeatedProdName:eq(" + index + ")").val();

        // Product Name Color End
        output += "[/color]";

        // Product Label Size End
        output += "[/size]";

        // List Start (2)
        output += "[list]";

        // Alt Text Color (Start)
        output += "[color=" + $("#productsCPInfoAlt").colorpicker('getValue') + "]";

        // Price Label
        output += "Price: ";

        // Alt Text Color End
        output += "[/color]";

        // Price Color (Start)
        output += "[color=" + $("#productsCPPrice").colorpicker('getValue') + "]";

        // Price
        output += $(".repeatedProdPrice:eq(" + index + ")").val() + " $";

        // Price Color End
        output += "[/color]\n";

        // Alt Text Color (Start)
        output += "[color=" + $("#productsCPInfoAlt").colorpicker('getValue') + "]";

        // Features Label
        output += "Features: ";

        // Alt Text Color End
        output += "[/color]";

        // List Start (3)
        output += "[list]";

        // Text Color Start
        output += "[color=" + $("#productsCPInfo").colorpicker('getValue') + "]";

        // Loop of Product Features
        $(".repeatedProducts:eq(" + index + ") .productsFeatureLabels").each(function (index2) {
            // If Feature is enabled 
            if ($(".repeatedProducts:eq(" + index + ") .productsFeatureLabels:eq(" + index2 + ")").prop("checked")) {
                // Bullet Style
                output += $("#productsBulletDropdown").find(":selected").text() + " ";
                // Feature Text
                output += $(this).parent().text() + "\n";
            }
        });

        // Text Color End
        output += "[/color]";

        // List End (2)
        output += "[/list]";

        // List End (1)
        output += "[/list]";

        // Product Link End
        if ($(".repeatedProdLink:eq(" + index + ")").val().length > 0) {
            output += "[/url]";
        }
        
    });

    // List End (0)
    output += "[/list]";

    // Align End
    output += "[/align]";

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

        output += "[pmme=" + pmTitle.replaceAll(" ", "+").replaceAll("'", "").replaceAll("!", "")
            + "&message=" + pmBody.replaceAll(" ", "+").replaceAll("'", "").replaceAll("!", "") + "][b]";
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

// Layout 1 - FAQ
function updateFAQOutput() {
    var output = "";

    // Font from general

    // Alignment Start
    output += "[align=";
    if ($("#faqAlignLeft").prop("checked"))
        output += "left";
    else if ($("#faqAlignCenter").prop("checked"))
        output += "center";
    else if ($("#faqAlignRight").prop("checked"))
        output += "right";
    output += "]";

    // Label Size Start
    output += "[size=";
    if ($("#faqLabelSizeXXS").prop("checked"))
        output += "xx-small";
    else if ($("#faqLabelSizeXS").prop("checked"))
        output += "x-small";
    else if ($("#faqLabelSizeS").prop("checked"))
        output += "small";
    else if ($("#faqLabelSizeM").prop("checked"))
        output += "medium";
    else if ($("#faqLabelSizeL").prop("checked"))
        output += "large";
    else if ($("#faqLabelSizeXL").prop("checked"))
        output += "x-large";
    else if ($("#faqLabelSizeXXL").prop("checked"))
        output += "xx-large";
    output += "]"

    // Label Color Start
    output += "[color=" + $("#faqCPLabel").colorpicker('getValue') + "]";

    // Contact Label
    output += $("#faqHeaderLabel").val();

    // Label Color End
    output += "[/color]";

    // Label Size End
    output += "[/size]\n";

    // Text Size Start
    output += "[size=";
    if ($("#faqTextSizeXXS").prop("checked"))
        output += "xx-small";
    else if ($("#faqTextSizeXS").prop("checked"))
        output += "x-small";
    else if ($("#faqTextSizeS").prop("checked"))
        output += "small";
    else if ($("#faqTextSizeM").prop("checked"))
        output += "medium";
    else if ($("#faqTextSizeL").prop("checked"))
        output += "large";
    else if ($("#faqTextSizeXL").prop("checked"))
        output += "x-large";
    else if ($("#faqTextSizeXXL").prop("checked"))
        output += "xx-large";
    output += "]"

    // FAQ Q/A
    $(".repeatedFAQ").each(function (index) {
        // ------------ Question
        // Question Label Color Start
        output += "[color=" + $("#faqCPQuestionLabel").colorpicker('getValue') + "]";
        // Question Label
        output += "[b]Q: [/b]";
        // Question Label Color End
        output += "[/color]";

        // Question Color Start
        output += "[color=" + $("#faqCPTextLabel").colorpicker('getValue') + "]";
        // Question
        output += $(".repeatedFAQQ:eq(" + index + ")").val();
        // Question Color End
        output += "[/color][list]";

        // ------------ Anwser
        // Anwser Label Color Start
        output += "[color=" + $("#faqCPAnwserLabel").colorpicker('getValue') + "]";
        // Anwser Label
        output += "[b]A: [/b]";
        // Anwser Label Color End
        output += "[/color]";

        // Anwser Color Start
        output += "[color=" + $("#faqCPTextLabel").colorpicker('getValue') + "]";
        // Anwser
        output += $(".repeatedFAQA:eq(" + index + ")").val();
        // Anwser Color End
        output += "[/color][/list]";
    });

    // Text Size End
    output += "[/size]";

    // Align End
    output += "[/align]";

    return output;
}

// Layout 1 - Vouches
function updateVouchesOutput() {
    var output = "";

    // Font from general

    // Alignment Start
    output += "[align=";
    if ($("#vouchesAlignLeft").prop("checked"))
        output += "left";
    else if ($("#vouchesAlignCenter").prop("checked"))
        output += "center";
    else if ($("#vouchesAlignRight").prop("checked"))
        output += "right";
    output += "]";

    // Label Size Start
    output += "[size=";
    if ($("#vouchesLabelSizeXXS").prop("checked"))
        output += "xx-small";
    else if ($("#vouchesLabelSizeXS").prop("checked"))
        output += "x-small";
    else if ($("#vouchesLabelSizeS").prop("checked"))
        output += "small";
    else if ($("#vouchesLabelSizeM").prop("checked"))
        output += "medium";
    else if ($("#vouchesLabelSizeL").prop("checked"))
        output += "large";
    else if ($("#vouchesLabelSizeXL").prop("checked"))
        output += "x-large";
    else if ($("#vouchesLabelSizeXXL").prop("checked"))
        output += "xx-large";
    output += "]"

    // Label Color Start
    output += "[color=" + $("#vouchesCPLabel").colorpicker('getValue') + "]";

    // Contact Label
    output += $("#vouchesHeaderLabel").val();

    // Label Color End
    output += "[/color]";

    // Label Size End
    output += "[/size]\n";

    // Vouch Copies Enabled
    if ($("#vouchesEnableVouchCopy").prop("checked")) {
        // Vouch Copy Label Size Start
        output += "[size=";
        if ($("#vouchesCopyLabelSizeXXS").prop("checked"))
            output += "xx-small";
        else if ($("#vouchesCopyLabelSizeXS").prop("checked"))
            output += "x-small";
        else if ($("#vouchesCopyLabelSizeS").prop("checked"))
            output += "small";
        else if ($("#vouchesCopyLabelSizeM").prop("checked"))
            output += "medium";
        else if ($("#vouchesCopyLabelSizeL").prop("checked"))
            output += "large";
        else if ($("#vouchesCopyLabelSizeXL").prop("checked"))
            output += "x-large";
        else if ($("#vouchesCopyLabelSizeXXL").prop("checked"))
            output += "xx-large";
        output += "]"

        // Vouch Copy Label Color Start
        output += "[color=" + $("#vouchesCPCopyLabel").colorpicker('getValue') + "]";

        // Vouch Copy Label
        output += "" + $("#vouchesCopyLabel").val() + " ";

        // Vouch Copy Label Color End
        output += "[/color]";

        // Number of Vouch Copies Color Start
        output += "[color=" + $("#vouchesCPCopyNumber").colorpicker('getValue') + "]";

        // Number of Vouch Copies
        output += "[b]" + $("#vouchesCopyCount").val() + "[/b]";

        // Number of Vouch Copies Color Start
        output += "[/color]";

        // Vouch Copy Label Size Start
        output += "[/size]\n";
    }

    // Vouch Quotes Color Start
    output += "[color=" + $("#generalCPSecondary").colorpicker('getValue') + "]";

    // Vouch Quotes
    output += "VOUCHED QUOTES GO HERE\n";

    // Vouch Quotes Color End
    output += "[/color]";

    // Alignment End
    output += "[/align]";

    return output;
}