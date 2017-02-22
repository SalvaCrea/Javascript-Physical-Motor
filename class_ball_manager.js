class_ball_manager = {

		time : 0,
		balls : new Array(),
		frequence_create : 50,
		last_create : 0,
		frequence : 1000/25,

		max_ball : 6000,

		core : function()
    {
        this.core_run = setInterval( "class_ball_manager.run()" , this.frequence );
    },
		stop : function()
		{
			clearInterval( this.core_run );
		},
		run : function()
		{

				this.last_create += this.frequence;
				this.time  += this.frequence;

				if( this.last_create > this.frequence_create && this.balls.length < this.max_ball )
				{

					 this.last_create = 0;

					 elem = new ball;
					 elem.create();

					 this.balls.push( elem );

				}


				this.balls.forEach(function( elem )
				{
					    elem.move();
				});

		}


}
