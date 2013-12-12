//*****************************************************************
//
//                          dialog handler
//
//*****************************************************************

// show dialog
function showDialog(kind)
{
    // pause the game
    game.gameplay.pause();
    $("#dialog_container").show();
    // show message
    $("#message").attr('src', "imgs/message_" + kind + ".png").show();
    $("#"+kind).show();
    // make the game area transparent
    $("#game_area").css("opacity", 0.2);
    $("#running_man").css("opacity", 0.2);
}

// hide dialog
function hideDialog()
{
    $("#dialog_container").hide();
    $("#dialog_container").children().hide();
    $("#running_man").css("opacity", 1);
    $("#game_area").css("opacity", 1);
}

$(document).ready(function () {
    hideDialog();
    $("#button_confirm").bind("click", function () {
        hideDialog();
        display.screens['gameplay'].clear();
        display.show('welcome');
    });
    $("#button_cancel").bind("click", function () {
        hideDialog();
    });
});
