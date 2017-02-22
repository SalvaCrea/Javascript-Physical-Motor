
class ground_manager
{
	constructor()
	{
		this.grounds = new Array();
	}
	generate()
	{

    for (var i = 0; i < 10000; i++) {

      var argsContent = new Object;
      argsContent.id = 'ground_' + i;

      if ( !this.grounds[0] ) {

        argsContent.pos_a_x =  0;
        argsContent.pos_a_y =  0;
        argsContent.pos_b_x =  1;
        argsContent.pos_b_y =  1;

      }
      else
      {

        argsContent.pos_a_x = this.grounds[ this.grounds.length - 1 ].pos_b_x;
        argsContent.pos_a_y = this.grounds[ this.grounds.length - 1 ].pos_b_y;

        argsContent.pos_b_x =  getRandomInt( argsContent.pos_a_x + 1 , argsContent.pos_a_x + 10 );
        argsContent.pos_b_y =  getRandomInt( argsContent.pos_a_y + 1 , argsContent.pos_a_y + 10 );

      }


      var class_ground = new ground( argsContent );
      class_ground.create();

      this.grounds.push( class_ground );

    }

	}
}
