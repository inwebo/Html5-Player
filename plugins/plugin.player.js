//<![CDATA[
;(function(window, document, ud){
    var L   = window.LibreJs = window.LibreJs   || {};
    var Lp  = L.Plugins      = L.Plugins        || {};



    Lp.Player = function(audioNode, options){

        var plugin = this;

        plugin.player   = audioNode;
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

            initSrc();
            plugin.player.addEventListener('loadedmetadata',function() {
                initControls();
                //plugin.player.currentTime = 0.1;
                plugin.draw();
            });
            initListeners();

        };

        var initSrc = function(){
            // Playlist pas vide
            if( plugin.playlist != ud ) {
                // Set la premiere entrée
                plugin.setSource(0, plugin.getMedia(0) );
            }
        };

        var initControls = function() {
            var vol = Math.round(plugin.player.volume * 100);

            if(plugin.options.buttons.position !== null) {
                plugin.options.buttons.position.setAttribute('max', plugin.player.getDuration());
            }
            if(plugin.options.bars.playing !== null) {
                plugin.options.bars.playing.setAttribute('max', plugin.player.getDuration());
            }
            if(plugin.options.bars.volume !== null) {
                plugin.options.bars.volume.value = vol;
            }
            if(plugin.options.display.volume !== null) {
                plugin.options.display.volume.innerHTML = vol;
            }
            if(plugin.options.buttons.play !== null) {
                plugin.options.buttons.play.checked = false;
                plugin.options.buttons.play.focus();
            }

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

        var initAudioCtx = function(){
            plugin.audioCtx = audioCtx.createMediaElementSource( plugin.player );
        };

        var connect = function() {
            plugin.audioCtx.connect( audioCtx.destination );
        };

        /**
         * Attache events callbacks.
         * @type {{changeVolume: Function, changeMedia: null, timeUpdate: Function, changePlayPosition: Function, buffering: Function}}
         */
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

        /**
         * Update Ui values
         */
        plugin.draw = function(wich) {

            // Mute button
            var mute = function() {
                if( plugin.options.buttons.mute !== null ) {
                    plugin.options.buttons.mute.checked = plugin.player.muted;
                }
            };

            var time = function() {
                var display = plugin.options.display;

                if(display.played !== null) {
                    display.played.innerHTML    = plugin.player.durationToString(plugin.player.getPlayed());
                }
                if(display.duration !== null) {
                    display.duration.innerHTML  = plugin.player.durationToString(plugin.player.getDuration());
                }

            };

            var volume = function() {

                var percents = Math.round(plugin.player.volume * 100);
                // Display bar
                if(plugin.options.bars.volume !== null) {
                    plugin.options.bars.volume.value = percents;
                }

                // Move button
                if(plugin.options.buttons.volume !== null) {
                    plugin.options.buttons.volume.value = plugin.player.volume;
                }

                // Digit display
                if(plugin.options.display.volume !== null) {
                    plugin.options.display.volume.innerHTML = percents;
                }

            };

            var playing = function() {
                if(plugin.options.buttons.position !== null) {
                    plugin.options.buttons.position.value   = Math.round(plugin.player.getPlayed());
                }
                if(plugin.options.buttons.position !== null) {
                    plugin.options.bars.playing.value       = Math.round(plugin.player.getPlayed());
                }
            };

            switch (wich){
                case "mute":
                    mute();
                    break
                case "time":
                    time();
                    break;
                case "volume":
                    volume();
                    break;
                case "playing":
                    playing();
                    break;
                default :
                    mute();
                    time();
                    volume();
                    playing();
                    break;
            };

        };
        //endregion Callbacks

        //region Buttons
        /**
         * Change cursor position from plugin.options.buttons.position range element.
         * Set new media position.
         */
        plugin.onChangePlayPosition = function() {
            /**
             * Range bar, update display & set new position.
             */
            plugin.on.changePlayPosition(function(){
                if(plugin.options.buttons.position !== null) {
                    plugin.player.currentTime = plugin.options.buttons.position.value;
                }
            });
        };

        plugin.onPlay = function() {
            var bp = plugin.options.buttons.play;
            if( bp !== null) {
                bp.onclick = function(){
                    if(plugin.player.paused || plugin.player.currentTime == 0) {
                        plugin.play();
                    }
                    else {
                        plugin.pause();
                    }
                };
            }
        };

        plugin.onChangeVolume = function() {
            var v = plugin.options.buttons.volume;
            if( v !== null) {
                v.onchange = function () {
                    plugin.player.volume = v.value;
                    plugin.draw("volume");
                };
            }
        };

        plugin.onMute = function() {
            var m = plugin.options.buttons.mute;
            if( m !== null) {
                m.onclick = function () {
                    if (!plugin.player.muted) {
                        plugin.player.muted = true;
                    }
                    else {
                        plugin.player.volume = plugin.options.bars.volume.value/100;
                        plugin.player.muted = false;
                    }
                };
            }
        };
        //endregion
        plugin.addPlugin = function ( _plugin ) {
            plugin.canvas = _plugin.canvas;
            plugin.audioCtx.connect( _plugin.analyser );
            _plugin.start();
        };

        //region @Aliases
        plugin.play = function() {
            plugin.player.play();
        };

        plugin.stop = function() {
            plugin.player.stop();
        };

        plugin.pause = function() {
            plugin.player.pause();
        };
        //endregion

        init(options);
        initAudioCtx();
        connect();

        return plugin;
    };

})(window, document);
//]]>
