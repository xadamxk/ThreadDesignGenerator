$(document).ready(function () {
    // ---------------------------------------------------- General Tab ----------------------------------------------------
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
    // General Desired Site Listener
    $("#generalCPDesiredSite").on("input", function () {
        if (isHexaColor($("#generalCPDesiredSite").colorpicker('getValue').replace("#", ""))) {
            desiredSiteColor = $("#generalCPDesiredSite").colorpicker('getValue');
            setDesiredSiteBackgroundColorPickers();
        }
    });
    // ---------------------------------------------------- Header Tab ----------------------------------------------------
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
    // Header Update Output
    $('body').on("click", "#headerUpdateOutput", function () {
        updateOutput("#headerPreview", "#headerOutput");
    });
    // ---------------------------------------------------- Features Tab ----------------------------------------------------
    // Features Update Output
    $('body').on("click", "#featuresUpdateOutput", function () {
        updateOutput("#featuresPreview", "#featuresOutput");
    });
    // Features List
    $('.repeater').repeater({
        // (Optional)
        // start with an empty list of repeaters. Set your first (and only)
        // "data-repeater-item" with style="display:none;" and pass the
        // following configuration flag
        initEmpty: false,
        // (Optional)
        // "defaultValues" sets the values of added items.  The keys of
        // defaultValues refer to the value of the input's name attribute.
        // If a default value is not specified for an input, then it will
        // have its value cleared.
        defaultValues: {
            'text-input': 'New Feature'
        },
        // (Optional)
        // "show" is called just after an item is added.  The item is hidden
        // at this point.  If a show callback is not given the item will
        // have $(this).show() called on it.
        show: function () {
            $(this).slideDown();
            updateOutput("#featuresPreview", "#featuresOutput");
        },
        // (Optional)
        // "hide" is called when a user clicks on a data-repeater-delete
        // element.  The item is still visible.  "hide" is passed a function
        // as its first argument which will properly remove the item.
        // "hide" allows for a confirmation step, to send a delete request
        // to the server, etc.  If a hide callback is not given the item
        // will be deleted.
        hide: function (deleteElement) {
            if (confirm('Are you sure you want to delete this element?')) {
                $(this).slideUp(deleteElement);
                // Hacky way of updating preview after animation
                setTimeout(function () {
                    // Do something after 1 second 
                    updateOutput("#featuresPreview", "#featuresOutput");
                }, 500);
            }
        },
        // (Optional)
        // You can use this if you need to manually re-index the list
        // for example if you are using a drag and drop library to reorder
        // list items.
        ready: function (setIndexes) {
            //$dragAndDrop.on('drop', setIndexes);
        },
        // (Optional)
        // Removes the delete button from the first list item,
        // defaults to false.
        isFirstItemUndeletable: false
        });
        // ---------------------------------------------------- Contact Tab ----------------------------------------------------
        // Contact PM Enable
        $("#contactEnablePM").prop('checked', true);
        $("#contactEnablePM").change(function () {
            if ($(this).prop("checked"))
                toggleContactPMInputs(false);
            else
                toggleContactPMInputs(true);
        });
        // Contact IM Enable
        toggleContactIMInputs(true);
        $("#contactEnableIM").change(function () {
            if ($(this).prop("checked"))
                toggleContactIMInputs(false);
            else
                toggleContactIMInputs(true);
        });
        // Contact Update Output
        $('body').on("click", "#contactUpdateOutput", function () {
            updateOutput("#contactPreview", "#contactOutput");
        });
        // Contact Enable Skype MyCode
        $(".contactIMServices").change(function () {
            if ($("#contactIMServiceSkype").prop("checked")) {
                $("#contactEnableSkypeDiv").toggle(true);
            } else {
                $("#contactEnableSkypeDiv").toggle(false);
            }
        });

    // ---------------------------------------------------- Vouches Tab ----------------------------------------------------
    //plugin bootstrap minus and plus
    //http://jsfiddle.net/laelitenetwork/puJ6G/
    $('.btn-number').click(function (e) {
        e.preventDefault();

        fieldName = $(this).attr('data-field');
        type = $(this).attr('data-type');
        var input = $("input[name='" + fieldName + "']");
        var currentVal = parseInt(input.val());
        if (!isNaN(currentVal)) {
            if (type == 'minus') {

                if (currentVal > input.attr('min')) {
                    input.val(currentVal - 1).change();
                }
                if (parseInt(input.val()) == input.attr('min')) {
                    $(this).attr('disabled', true);
                }

            } else if (type == 'plus') {

                if (currentVal < input.attr('max')) {
                    input.val(currentVal + 1).change();
                }
                if (parseInt(input.val()) == input.attr('max')) {
                    $(this).attr('disabled', true);
                }

            }
        } else {
            input.val(0);
        }
    });
    $('.input-number').focusin(function () {
        $(this).data('oldValue', $(this).val());
    });
    $('.input-number').change(function () {

        minValue = parseInt($(this).attr('min'));
        maxValue = parseInt($(this).attr('max'));
        valueCurrent = parseInt($(this).val());

        name = $(this).attr('name');
        if (valueCurrent >= minValue) {
            $(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr('disabled')
        } else {
            alert('Sorry, the minimum value was reached');
            $(this).val($(this).data('oldValue'));
        }
        if (valueCurrent <= maxValue) {
            $(".btn-number[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')
        } else {
            alert('Sorry, the maximum value was reached');
            $(this).val($(this).data('oldValue'));
        }


    });
    $(".input-number").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
    // Vouches Enable Vouch Copies
    toggleVouchesVouchCopies(true);
    $("#vouchesEnableVouchCopy").change(function () {
        if ($(this).prop("checked"))
            toggleVouchesVouchCopies(false);
        else
            toggleVouchesVouchCopies(true);
    });
    // Contact Update Output
    $('body').on("click", "#vouchesUpdateOutput", function () {
        updateOutput("#vouchesPreview", "#vouchesOutput");
    });
    // Disable Vouch count value box
    $("#vouchesCopyCount").prop();
});