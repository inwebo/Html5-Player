//<![CDATA[
;(function(window, document, ud){
    var L   = window.LibreJs = window.LibreJs   || {};
    var Lp  = L.Plugins      = L.Plugins        || {};

    if (window.File && window.FileReader && window.FileList && window.Blob) {
        // Great success! All the File APIs are supported.
    } else {
        alert('The File APIs are not fully supported in this browser.');
    }


    Lp.FileUpload = function(input, options){

        var plugin = this;

        plugin.input   = input;
        // @todo
        plugin.loop     = false;

        plugin.options = {
            bars: {
                playing:    null,   // <progress>
                buffered:   null,   // <progress>
                volume:     null    // <progress>
            },
            buttons: {
                volume: null,
                back: null,
                pause: null,
                play: null,
                next: null,
                mute: null,
                position:null   // <input type="range">
            },
            display: {
                duration:null,
                played:null,
                volume:null
            }
        };

        var init = function(options){
            if( options !== ud ) {
                plugin.options = options;
            }

            initListeners();
        };

        var initListeners = function() {
            plugin.onChangePlayPosition();
            plugin.onChangeVolume();
            plugin.onBuffering();
            //plugin.onBufferingDone();
            plugin.onPlay();
            plugin.onMute();
            plugin.onTimeupdate();
        };

        plugin.on = {
            timeUpdate:function(callback){
                plugin.player.addEventListener('timeupdate', callback, false);
            },
            changePlayPosition:function(callback){
                if(plugin.options.buttons.position !== null) {
                    plugin.options.buttons.position.addEventListener('click',callback, true);
                }
            },
            buffering:function(callback){
                plugin.player.addEventListener('progress', callback, false);
            },
            changeMedia:null
        };
        //region Callbacks
        /**
         * Callback time progress
         */
        plugin.onTimeupdate = function(){
            /**
             * Progress bar
             */
            plugin.on.timeUpdate(function(){
                if(plugin.options.bars.playing !== null) {
                    plugin.options.bars.playing.value = plugin.player.getPlayed()
                    plugin.draw("time");
                }
            });

            /**
             * Range bar input
             */
            plugin.on.timeUpdate(function(){
                if(plugin.options.buttons.position !== null) {
                    plugin.options.buttons.position.setAttribute('value', plugin.player.getPlayed());
                    plugin.options.buttons.position.value = plugin.player.getPlayed();
                    plugin.draw("time");
                };
            });

        };

        /**
         * Callback buffering
         */
        plugin.onBuffering = function() {
            plugin.on.buffering(function(){
                if(plugin.options.bars.buffered!=null) {
                    plugin.options.bars.buffered.value = Math.round(plugin.player.getPercentBuffered());
                }
            });
        };

        /**
         * Callback buffering done
         * @todo
         */
        plugin.onBufferingDone = function(callback) {
            plugin.on.buffering(function(callback){

            });
        };


        init(options);


        return plugin;
    };

})(window, document);
//]]>
