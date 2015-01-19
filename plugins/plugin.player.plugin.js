//<![CDATA[
;(function(window, document, ud){
    var L   = window.LibreJs = window.LibreJs   || {};
    var Lp  = L.Plugins      = L.Plugins        || {};



    Lp.Player.Plugin = function(ctx,canvas){

        var plugin = this;

        plugin.audioCtx = ctx;
        plugin.canvas   = canvas;

        var init = function(){
            // Plugin
            plugin.analyser = audioCtx.createAnalyser();
            plugin.analyser.fftSize = 256;
            plugin.analyser.smoothingTimeConstant =0.1;
            plugin.analyser.minDecibels = -140;
            plugin.analyser.maxDecibels = 10;
            plugin.audioCtx.connect(plugin.analyser);
            plugin.freqs = new Uint8Array(plugin.analyser.frequencyBinCount);
        };

        plugin.start = function(){
            draw();
        };

        var draw = function(){
            plugin.analyser.getByteFrequencyData(plugin.freqs);
            var pencil = plugin.canvas.getContext("2d");
            pencil.fillStyle ="rgba(2,2,2,.1)";
            pencil.clearRect ( 0 , 0 , plugin.canvas.width, plugin.canvas.height );
            pencil.fillRect(0,0,plugin.canvas.width, plugin.canvas.height);

            for (var i = 0; i < plugin.analyser.frequencyBinCount; i++) {
                var v = plugin.freqs[i];
                var p = v / 256;
                var h = plugin.canvas.height * p;
                var o = plugin.canvas.height - h ;
                var w = plugin.canvas.width / plugin.analyser.frequencyBinCount;
                var hue = i/plugin.analyser.frequencyBinCount * 360;
                //pencil.fillStyle = 'hsl(' + hue + ', 100%, 50%)';
                pencil.fillStyle = 'rgba(255, 255, 255,.5)';
                pencil.fillRect(i * w, o, w, h);

            }
            requestAnimationFrame(draw.bind(this));
        };
        init();
        return plugin;
    };

})(window, document);
//]]>
