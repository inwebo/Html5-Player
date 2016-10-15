//<![CDATA[
;(function(window, document, ud){
    var L   = window.LibreJs = window.LibreJs   || {};
    var Lp  = L.Plugins      = L.Plugins        || {};
/*
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        // Great success! All the File APIs are supported.
    } else {
        alert('The File APIs are not fully supported in this browser.');
    }
*/

    Lp.Xhr = function(input, options){

        var plugin = this;

        plugin.input   = input;
        plugin.xhr     = null;

        plugin.options = {

        };

        var init = function(options){
            if( options !== ud ) {
                plugin.options = options;
            }
        };

        init(options);
        return plugin.xhr;
    };

})(window, document);
//]]>
