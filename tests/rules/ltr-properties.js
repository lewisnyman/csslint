(function(){
    "use strict";
    var Assert = YUITest.Assert;

    YUITest.TestRunner.add(new YUITest.TestCase({

        name: "LTR property detection",

        "Using padding-right should result in a warning ": function(){
            var result = CSSLint.verify(".foo { padding-right: 10px; }", { "ltr-properties": 1 });
            Assert.areEqual(1, result.messages.length);
            Assert.areEqual("warning", result.messages[0].type);
            Assert.areEqual("Using padding-right could require an equivalent rule for RTL styling.", result.messages[0].message);
        },

        "Using font-size should result no warning ": function(){
            var result = CSSLint.verify(".foo { font-size: 10px; }", { "ltr-properties": 1 });
            Assert.areEqual(0, result.messages.length);
        },
    }));

})();
