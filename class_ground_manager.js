
class ground_manager
{
	constructor()
	{
		this.grounds = new Array();
	}
	generate()
	{

    for (var i = 0; i < 30; i++) {

      var argsContent = new Object;
      argsContent.id = 'ground_' + i;

      if ( !this.grounds[0] ) {

        argsContent.pos_a_x =  0;
        argsContent.pos_a_y =  100;
        argsContent.pos_b_x =  200;
        argsContent.pos_b_y =  200;

      }
      else
      {

        argsContent.pos_a_x = this.grounds[ this.grounds.length - 1 ].pos_b_x;
        argsContent.pos_a_y = this.grounds[ this.grounds.length - 1 ].pos_b_y;

        argsContent.pos_b_x =  getRandomInt( argsContent.pos_a_x + 50 , argsContent.pos_a_x + 150 );
        argsContent.pos_b_y =  getRandomInt( argsContent.pos_a_y + 50 , argsContent.pos_a_y + 150 );

      }


      var class_ground = new ground( argsContent );
      class_ground.create();
      
      this.grounds.push( class_ground );

    }

	}
}
