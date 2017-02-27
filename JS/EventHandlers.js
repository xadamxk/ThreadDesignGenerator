$(document).ready(function () {
    // General Content Listener
    $('.generalShowContent').change(function () {
        // Match Navigation with Thread Contents
        switch ($(this).val()) {
            case '1': toggleNavVisibility($(this), "generalShowHeader");
                break;
            case '2': toggleNavVisibility($(this), "generalShowDescription");
                break;
            case '3': toggleNavVisibility($(this), "generalShowFeatures");
                break;
            case '4': toggleNavVisibility($(this), "generalShowPricing");
                break;
            case '5': toggleNavVisibility($(this), "generalShowContact");
                break;
            case '6': toggleNavVisibility($(this), "generalShowFAQ");
                break;
            case '7': toggleNavVisibility($(this), "generalShowVouches");
                break;
            case '8': toggleNavVisibility($(this), "generalShowTOS");
                break;
        }
    });
    // General Random Primary Listener 
    $('body').on("click", "#generalPrimaryRandom", function () {
        primaryColor = getRandomColor();
        setPrimaryColorPickers();
    });
    // General Primary Listener
    $("#generalCPPrimary").on("input", function () {
        if (isHexaColor($("#generalCPPrimary").colorpicker('getValue').replace("#", ""))) {
            primaryColor = $("#generalCPPrimary").colorpicker('getValue');
            setPrimaryColorPickers();
        }
    });
    // General Random Secondary Listener 
    $('body').on("click", "#generalSecondaryRandom", function () {
        secondaryColor = getRandomColor();
        setSecondaryColorPickers();
    });
    // General Secondary Listener
    $("#generalCPSecondary").on("input", function () {
        if (isHexaColor($("#generalCPSecondary").colorpicker('getValue').replace("#", ""))) {
            primaryColor = $("#generalCPSecondary").colorpicker('getValue');
            setSecondaryColorPickers();
        }
    });
    // Header Main Underline
    $("#headerMainUnderlineColor").colorpicker('disable');
    $("#headerMainUnderline").change(function () {
        if ($(this).prop("checked")) {
            $("#headerMainUnderlineColor").colorpicker('enable');
        } else {
            $("#headerMainUnderlineColor").colorpicker('disable');
        }
    });
    // Header Sub Underline
    $("#headerSubUnderline").prop('checked', true);
    $("#headerSubUnderline").change(function () {
        if ($(this).prop("checked")) {
            $("#headerSubUnderlineColor").colorpicker('enable');
        } else {
            $("#headerSubUnderlineColor").colorpicker('disable');
        }
    });
    // Header Sub Enable
    $("#headerEnableSubHeader").prop('checked', true);
    $("#headerEnableSubHeader").change(function () {
        if ($(this).prop("checked"))
            toggleHeaderSubInputs(false);
        else
            toggleHeaderSubInputs(true);
    });

});