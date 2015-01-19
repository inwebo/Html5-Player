//<![CDATA[
;(function(window, document, ud){
    /**
     * global constructor
     */
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    //if ( !HTMLAudioElement.prototype.cool ) {
    if (!HTMLAudioElement.prototype.getDuration) {

        HTMLAudioElement.prototype.getDuration = function() {
            var r;
            switch(this.duration) {

                // Unknown length, media datas available
                case isNaN(this.duration) === true:
                    r = -1;
                    break;

                // No media data
                case this.duration === 0:
                    r = 0;
                    break;

                // Streaming
                case this.duration === Infinity:
                    r = Infinity;
                    break;

                // Known length, > 0
                default :
                    r = Math.round( this.duration );
                    break;
            }
            return r;
        };

    };

    if (!HTMLAudioElement.prototype.getPlayed) {
        HTMLAudioElement.prototype.getPlayed = function() {
            return Math.round(this.currentTime);
        };
    };

    if (!HTMLAudioElement.prototype.getPercentPlayed) {
        /**
         * @returns {number} 0-100
         */
        HTMLAudioElement.prototype.getPercentPlayed = function() {
            var duration = this.getDuration();
            if( duration > 0 && duration !== Infinity) {
                return Math.floor((100 / this.duration) * this.currentTime);
            }
            else {
                return null;
            }

        };
    };

    if (!HTMLAudioElement.prototype.getPercentBuffered) {
        /**
         *
         * @returns {*}
         */
        HTMLAudioElement.prototype.getPercentBuffered = function() {
            var a = this.buffered.end( this.buffered.length - 1 );
            var d = this.duration;
            var r;
            if( d > 0 && d !== Infinity ) {
                r = ( ( a/d ) * 100);
            }
            else {
                r = null;
            }
            return r;
        };
    };

    if (!HTMLAudioElement.prototype.durationToString) {
        /**
         * @param _string {String} Replace {min} & {sec} by values
         * @returns {string} Formatted string
         */
        HTMLAudioElement.prototype.durationToString = function(_int) {
            var dt = new Date(1970,1,1);
            if( !isNaN(_int) && _int > -1 && _int !== Infinity) {
                dt.setSeconds(_int);
                var dts = dt.toTimeString();
                // Hours
                if( _int > 3600 ) {
                    dts = dts.replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
                }
                // Mins
                else {
                    dts = dts.replace(/.*(\d{2}:\d{2}).*/, "$1");
                }
                return dts;
            }
            else {
                return "∞";
            }

        };
    };
})(window, document);
//]]>
