/*
 * Rule: Detects properties for LTR text styling the require equivilent RTL styling.
 */
/*global CSSLint*/
CSSLint.addRule({
    //rule information
    id: "ltr-properties",
    name: "LTR properties",
    desc: "Detects properties for LTR text styling the require equivilent RTL styling.",
    browsers: "All",

    //initialization
    init: function(parser, reporter){
        "use strict";
        var rule = this,
            properties = {
                "border": 1,
                "border-left": 1,
                "border-right": 1,
                "border-radius": 1,
                "border-top-right-radius": 1,
                "border-top-left-radius": 1,
                "border-bottom-right-radius": 1,
                "border-bottom-left-radius": 1,
                padding: 1,
                "padding-left": 1,
                "padding-right": 1,
                margin: 1,
                "margin-left": 1,
                "margin-right": 1,
                "text-align": 1,
                float: 1,
                clear: 1,
                background: 1,
                "background-position": 1,
                left: 1,
                right: 1
            };
    }
});
