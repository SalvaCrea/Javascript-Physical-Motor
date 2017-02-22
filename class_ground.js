
class ground
{
	constructor( args = new Array() )
	{
    this.id = args.id;
    this.pos_a_x =  args.pos_a_x;
		this.pos_a_y =  args.pos_a_y;
    this.pos_b_x =  args.pos_b_x;
		this.pos_b_y =  args.pos_b_y;
    this.width = this.pos_b_x - this.pos_a_x;
    this.height =   this.pos_b_y - this.pos_a_y;

    this.size = Math.sqrt( ( this.width * this.width ) + ( this.height * this.height ) );

    this.color = getRandomInt( 0, 999 );
	}
	create( args )
	{

		// creation html
		var $ground = $( '<canvas>' )
    .attr({

      id : this.id,
      class : 'grounds',
      width : this.width,
      height : this.height

    })
    .css({

				'background' : '#' + this.color,
				'opacity' : 0.5,
        'left' : this.pos_a_x,
        'top' : this.pos_a_y,
        'border' : '1px solid #fff'

		});

    $( 'body' ).append( $ground );

    var ctx = document.getElementById( this.id ).getContext('2d');
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#fff';
    ctx.beginPath();
    ctx.moveTo( 0, 0);
    ctx.lineTo( this.width, this.height);
    ctx.stroke();

	}
}
