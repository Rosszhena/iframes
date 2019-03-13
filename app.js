fraction = 0.8;
var players = [];

window.onload = function () { 
  window.addEventListener('scroll', window.onload.checkScroll, false);
  window.addEventListener('resize', window.onload.checkScroll, false);
 }

window.onload.checkScroll = () => {

    for(let i = 0; i < players.length; i++) {

        let video = players[i];
        let sizeiframe = document.getElementById("player"+(i+1));
        let x = sizeiframe.offsetLeft, y = sizeiframe.offsetTop, w = sizeiframe.offsetWidth, h = sizeiframe.offsetHeight, r = x + w, //right
            b = y + h, //bottom
            visibleX, visibleY, visible;

            visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
            visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

            visible = visibleX * visibleY / (w * h);

            if (visible < fraction) {            
                  video.pauseVideo();   
            }
    }
}

// 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.

      window.onYouTubeIframeAPIReady = function() {
        players.push(creaVideo('player1','AQ7eBCoz5_8'));        
        players.push(creaVideo('player2','Kutdw9o1Omg'));
        players.push(creaVideo('player3','JGbYM_ZxVA4'));
        players.push(creaVideo('player4','Ul4Aag_almQ'));

      }

       function creaVideo (numVideo,urlVideo){
          var player = new YT.Player(numVideo, {
          height: '240px',
          width: '600px',
          videoId: urlVideo,
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });

          return player;
       }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        //event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
    
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING) {
            var temp = event.target.a.src;
            console.log(temp)
            for (var i = 0; i < players.length; i++) {
                if (players[i].a.src != temp) players[i].pauseVideo();
                console.log(players[i].a.src)
              }
        }
      }