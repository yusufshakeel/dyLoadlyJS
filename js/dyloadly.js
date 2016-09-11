/*!
 * dyLoadly is a JavaScript library for showing loading icons.
 *
 * Author: Yusuf Shakeel
 * https://github.com/yusufshakeel
 *
 * GitHub Link: https://github.com/yusufshakeel/dyLoadlyJS
 *
 * MIT license
 * Copyright (c) 2016 Yusuf Shakeel
 *
 * Date: 2016-09-09 Friday
 */

/*! dyloadly | (c) 2016 Yusuf Shakeel | https://github.com/yusufshakeel/dyLoadlyJS */

(function (global, $) {

    "use strict";

    var
        //this will be used by the user
        dyloadly = {};

    /**
     * this function will extend source object with defaults object.
     *
     * @param object source     this is the source object
     * @param object defaults   this is the default object
     * @return object
     */
    function extendSource (source, defaults) {
        var property;
        for (property in defaults) {
            if (source.hasOwnProperty(property) === false) {
                source[property] = defaults[property];
            }
        }
        return source;
    }


    //------------------------------ dyloadly.init() ----------------------

    /**
     * this function will initialize dyloadly.
     *
     * option = {
     *  filepath : "string"     //(mandatory) path of the image file to be used
     * }
     */
    dyloadly.init = function (option) {

        //check if option is passed or not
        if(typeof option === "undefined") {
            global.console.log("Option missing.");
            return false;
        }

        var
            div;

        div = $("<div>", {
                    "class" : "dyloadly-container",
                    "id" : "dyloadly-container"
                });
        $("body").prepend(div);

        $(".dyloadly-container").css("background-image", "url('" + option.filepath + "')");

        $(window).load(function () {
            $("#dyloadly-container").fadeOut("slow");
        });

    };


    //------------------------------ dyloadly.init() ends here ------------


    //attach to global window object
    global.dyloadly = dyloadly;

}(typeof window !== "undefined" ? window : this,
jQuery));
