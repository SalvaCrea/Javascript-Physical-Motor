
class ball
{
	constructor()
	{
		this.pos_x = 0;
		this.pos_y = 0;
		this.speed_x = 0;
		this.speed_y = 0;
		this.width = 30;
		this.height = 30;
		this.color = '000';
		this.id = 0;
		this.opacity = 1;
	}
	create()
	{

		this.id = class_ball_manager.balls.length - 1;
		this.pos_y = -30;
		this.pos_x = getRandomInt( 0, ecran.width() );

		this.speed_x = getRandomInt( 0, 0 );
		this.speed_y = getRandomInt( 0, 0 );

		this.opacity = Math.random();

		var size = getRandomInt( 5, 40 );
		this.width = size;
		this.height = size;

		this.color = getRandomInt( 0, 999 );

		// creation html
		var $ball = $( '<div></div>' );
		$ball = $ball.attr( 'id', this.id );
		$ball = $ball.attr( 'class', 'balls' );

		$ball = $ball.css({

				'left' : 	this.pos_x,
				'top' : 	this.pos_y,

				'width' : this.width,
				'height' : this.height,

				'background' : '#' + this.color,

				'opacity' :this.opacity

		});

		$( 'body' ).append( $ball );

	}
	move()
	{
      this.gravite();

      this.collision();

			this.pos_y +=  this.speed_y;
			this.pos_x +=  this.speed_x;

			$( '#' + this.id ).css({
				'left' : 	this.pos_x,
				'top' : 	this.pos_y
			});

	}
  collision()
  {
      var grounds = class_ground_manager.grounds;

      for (var i = 0; i < grounds.length; i++) {
        var ground = grounds[i];

        var col_x = false;
        var col_y = false;

        if ( ground.pos_a_x <= this.pos_x
          && ground.pos_b_x >= ( this.pos_x  )
        ) {

          col_x = true;

        }

        if ( ground.pos_a_y <= ( this.pos_y + this.height )
          && ground.pos_b_y >=  this.pos_y
        ) {

          col_y = true;

        }

        if ( col_y && col_x ) {

          this.speed_y = - ( this.speed_y * 0.8 );
          this.speed_x = 1;
        }

      }
  }
  gravite()
  {
      this.speed_y +=  0.1 ;
  }
}
