////////////////////////////////////
//  My little motor grapic
///////////////////////////////////

class render
{
	manage( elements )
	{

			if ( elements.length > 0 ) {


				elements.forEach( function()
				{
					if ( !$( '#' + elements.id ) ) {
							insert_in_dom( elements );
					}
				});


				$( '#' + elements.id ).css({

						'background' : '#' + this.material.color,
						'opacity' : this.material.opacity,
		        'left' : this.pos_a_x,
		        'top' : this.pos_a_y,

				});

			}


	}
	insert_in_dom( element )
	{

			if ( element.type == 'circle' ) {

				var $element = $( '<canvas>' )
				.attr({

					id : element.id,
					class : 'grounds',
					width : element.width,
					height : element.height

				});

				$( '#world' ).append( $element );

				var centerX = element.width / 2;
	      var centerY = element.height / 2;
	      var radius = 70;

				var context = document.getElementById( this.id ).getContext('2d');
	      context.beginPath();
	      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
	      context.fillStyle = 'green';
	      context.fill();
	      context.lineWidth = 5;
	      context.strokeStyle = '#003300';
	      context.stroke();

			}
	}
	delete_in_dom( element )
	{
		$( '#' + element ).remove();
	}
}
