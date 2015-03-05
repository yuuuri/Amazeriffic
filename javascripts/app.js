var main = function () {
    var toDos = ["Get groceries",
                 "Make up some new ToDos",
                 "Prep for Monday's class",
                 "Answer emails",
                 "Take Gracies to the park",
                 "Finish writing this book"];
    var photos = ['<p><a class="group4"  href="images/newest.png" title="1">Grouped Photo 1</a></p>',
        '<p><a class="group4"  href="images/oldest.png" title="2">Grouped Photo 2</a></p>',
        '<p><a class="group4"  href="images/before_add.png" title="3">Grouped Photo 3</a></p>',
        '<p><a class="group4"  href="images/after_add.png" title="4">Grouped Photo 4</a></p>'];

    $(".tabs a span").toArray().forEach(function (element) {
        var $element = $(element);

        // create a click handler for this element
        $element.on("click", function () {
            var $content,
                $input,
                $button,
                i;

            $(".tabs a span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();

            if ($element.parent().is(":nth-child(1)")) {
                // newest first, so we have to go through
                // the array backwords
                $content = $("<ul>");
                for (i = toDos.length-1; i >= 0; i--) {
                    $content.append($("<li>").text(toDos[i]));
                }
            } else if ($element.parent().is(":nth-child(2)")) {
                // oldest first, so we go through the array forwards
                $content = $("<ul>");
                toDos.forEach(function (todo) {
                    $content.append($("<li>").text(todo));
                });
            } else if ($element.parent().is(":nth-child(3)")) {
                // input a new to-do
                $input = $("<input>"),
                $button = $("<button>").text("+");

                $button.on("click", function () {
                    if ($input.val() !== "") {
                        toDos.push($input.val());
                        $input.val("");
                    }
                });

                $content = $("<div>").append($input).append($button);
                /* Alternatively append() allows multiple arguments so the above
                can be done with $content = $("<div>").append($input, $button); */
            } else if ($element.parent().is(":nth-child(4)")) {
                $content = $("<ul>");
                for (i = 0; i <= photos.length; i++){
                    $content.append($("<li>").html(photos[i]));
                }
                $content.click(function(){
                    $(".group4").colorbox({rel:'group4', slideshow:true, transition:"none", width:"75%", height:"75%"});
                    });
                }

            //}

                $("main .content").append($content);

                return false;
            });
        });

        $(".tabs a:first-child span").trigger("click");
    };

    $(document).ready(main);
