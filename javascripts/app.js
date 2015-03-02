// Client-side code
/* jshint browser: true, jquery: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, strict: true, undef: true, unused: true */
 


/*
var main = function () {
    "use strict";

    
    $(".tabs a:nth-child(1)").on("click", function () {
        //make all the tbs inactive
        $(".tabs span").removeClass("active");

        //make the first tab active
        $(".tabs a:nth-child(1) span").addClass("active");

        //empty the main content so we can recreate it
        $("main .content").empty();

        //return false so we do not flollow the link
        return false;
    });

    $(" .tabs a:nth-child(2)").on("click", function () {
        $(".tabs span).removeClass("active");
        $(".tabs a:nth-child(2) span").addClass("active");
        $("main .content").empty();
        return false;
    });
    
    $(" .tabs a:nth-child(3)").on("click", function () {
        $(".tabs span).removeClass("active");
        $(".tabs a:nth-child(3) span").addClass("active");
        $("main .content").empty();
        return false;
    });

     refactoring the code using a function 

    var makeTabActive = function (tabNumber) {
        //construct the select from the tabNumber
        var tabSelector = ".tabs a:nth-child(" + tabNumber + ") span";
        $(".tabs span").removeClass("active");
        $(tabSelector).addClass("active");
        $("main .content").empty();
    };

    $(".tabs a:nth-child(1)").on("click", function () {
            makeTabActive(1);
            return false;
    });
    
    $(".tabs a:nth-child(2)").on("click", function () {
            makeTabActive(2);
            return false;
    });
    $(".tabs a:nth-child(3)").on("click", function () {
            makeTabActive(3);
            return false;
    });
    
     using loop and remove makeTabActive function altogether 

   var tabNumber;

   for (tabNumber = 1; tabNumber <=3; tabNumber++) {
       var tabSelector = ".tab a:nth-child(" + tabNumber + ") span";
       $(tabSelector).on("click", function (event) {
           $(".tab span").removeClass("active");
           $(event.target).addClass("active");
           return false;
       });
   }
};


var main = function () {
    "use strict";

    $(".tabs span").toArray().forEach(function (element) {
        //create a click handler for this element
        $(element).on("click", function () {
            $("tabs span").removeClass("active");
            $(element).addCalss("active");
            $("main .content").empty();
            return false;
        });
    });
};
*/
var main = function() {
    "use strict";

    $(".tabs a span").toArray().forEach(function (element) {
        //create a click handler for this element
        $(element).on("click", function () {
            // since we're using the jQuery version of element,
            // we'll go ahead and create a temporary variable
            // so we don't need t keep recreating it
            var $element = $(element);

            $(".tabs a span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();

            if($element.parent().is(":nth-child(1)")) {
                console.log("FIRST TAB CLICKED!");
            } else if ($element.parent().is(":nth-child(2)")) {
                console.log("SECOND TAB CLICKED!");
            } else if ($element.parent().is(":nth-child(3)")) {
                console.log("THIRD TAB CLICKED!");
            }

            return false;
        });
    });
};

$(document).ready(main);
