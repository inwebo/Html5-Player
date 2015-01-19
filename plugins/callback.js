//<![CDATA[
;(function(window, document, ud){
    var L   = window.LibreJs = window.LibreJs   || {};
    var Lp  = L.Plugins      = L.Plugins        || {};

    /**
     * @param options
     * @constructor
     */
    window.Foo = function(options) {

        var plugin = this;

        plugin.bar = function(_callback) {

            var a = function(){
              console.log('foo');
            };

            switch (_callback) {
                case "a":
                    a();
            }
            console.log(this);

        };

    };

})(window, document);
//]]>