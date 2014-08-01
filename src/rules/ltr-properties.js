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
        var rule = this;

        //rule initialization
    }
});
