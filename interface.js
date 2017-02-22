inferface =
{
    stop_ball : function()
    {
        console.log('stop');
        class_ball_manager.stop();
    },
    play_ball : function()
    {
        console.log('play');
        class_ball_manager.core();
    }
}

$( window ).ready(function(){
  $('#stop').click( inferface.stop_ball );

  $('#play').click( inferface.play_ball );
});
