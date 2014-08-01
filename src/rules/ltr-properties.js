/*
 * Rule: Detects properties for LTR text styling the require equivalent RTL styling.
 */
CSSLint.addRule({

    //rule information
    id: "ltr-properties",
    name: "LTR properties",
    desc: "Detects properties for LTR text styling the require equivalent RTL styling.",
    browsers: "All",

    //initialization
    init: function(parser, reporter){
        "use strict";
        var properties = {
            "border-left": 1,
            "border-right": 1,
            "border-radius": 1,
            "border-top-right-radius": 1,
            "border-top-left-radius": 1,
            "border-bottom-right-radius": 1,
            "border-bottom-left-radius": 1,
            "padding-left": 1,
            "padding-right": 1,
            "margin-left": 1,
            "margin-right": 1,
            "text-align": 1,
            clear: 1,
            background: 1,
            "background-position": 1,
            left: 1,
            right: 1
        },
        potentialProperties = {
            padding: 1,
            margin: 1,
            border: 1,
            float: 1,
        };

        parser.addListener("property", function(event){
            var rule = this,
                name    = event.property.toString().toLowerCase(),
                // value   = event.value.toString(),
                line    = event.line,
                col     = event.col;

            if (properties[name]){
                reporter.report("Using " + name + " could require an equivalent rule for RTL styling.", line, col, rule);
            }
            else if (potentialProperties[name]){
                // Check to see if they are actually affecting LTR.
                switch(name){

                case "padding":
                    //do something
                    break;

                case "margin":
                    //do something
                    break;

                case "border":
                    //do something
                    break;

                case "float":
                    //do something
                    break;

                }
            }
        });
    }
});
