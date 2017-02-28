class circle extends element {
    		constructor() {
					// important for norme js
					 super();

            this.type = 'circle';

        }
        create()
    		{

    			var $element = $( '<canvas>' )
    			.attr({

    				id : this.id,
    				class : this.type,
						width : this.width,
						height : this.height,

    			}).css({
    				position : 'absolute',
    				// width : this.width,
    				// height : this.height,
    				'opacity' : this.material.opacity
    			});

    			$( '#world' ).append( $element );

    			var centerX = this.radius();
    			var centerY = this.radius();
    			var radius = this.radius();

    			var context = document.getElementById( this.id ).getContext('2d');

    			context.beginPath();

    			context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
					//context.arc(centerX, centerY, 70, 0, 2 * Math.PI, false);
    			context.fillStyle = this.material.color;
    			context.lineWidth = 5;
    			// context.strokeStyle = this.material.color;

					context.fill();
    			// context.stroke();

					this.created = true;

					this.query = $( '#' + this.id );
    		}
				collision()
				{
					var a = new Object();
					var current_elem = this;
					this.world.elements.forEach( function( eleme )
					{
						if ( current_elem.id != eleme.id ) {


							a = collision_sharpe(
								current_elem.pos_x + current_elem.width/2,
								current_elem.pos_y + current_elem.width/2,
								eleme.pos_x + eleme.width/2,
								eleme.pos_y + eleme.width/2 );

								if ( a.hyp < ( current_elem.radius() ) + ( eleme.radius() ) ) {


										current_elem.speed_x = -current_elem.speed_x;
										eleme.speed_x = -eleme.speed_x;

										current_elem.speed_y = -current_elem.speed_y;
										eleme.speed_y = -eleme.speed_y;
								}

						}
					});


					if ( this.pos_center().x + ( this.width / 2 ) > this.world.width
					|| this.pos_center().x - ( this.width / 2 ) < 0 ) {
							this.speed_x = -this.speed_x;
					}

					if ( this.pos_center().y + ( this.height / 2 ) > this.world.height
					|| this.pos_center().y - ( this.height / 2 ) < 0 ) {
							this.speed_y = -this.speed_y;
					}

				}
		radius()
		{
			return this.width / 2;
		}
    pos_center() {
        return  { x : this.pos_x + this.radius() ,  y : this.pos_y + this.radius() };
    }

}
