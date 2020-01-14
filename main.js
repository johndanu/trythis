SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(window).ready(function() {
  SC.stream('/tracks/162536224',function(sound){
    $('#start').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });
});
