class circle extends element {
    		constructor() {
					// important for norme js
					 super();

            this.type = 'circle';
						this.list_force = ['x','y','x_y'];
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
    			var centerY = this.width / 2;
    			var radius = this.width / 2;

    			var ctx = document.getElementById( this.id ).getContext('2d');

    			ctx.beginPath();

    			ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);

    			ctx.fillStyle = this.material.color;
    			ctx.lineWidth = 5;


					ctx.fill();


					this.created = true;

					this.query = $( '#' + this.id );

					if ( this.world.dev_mode ) {

						var father = this;
						this.list_force.forEach(function(elem)
						{

							var $element = $( '<canvas>' )
							.attr({

								id : father.id + 'force' + elem,
								class : 'force',

							}).css({
								position : 'absolute'
							});

							$( 'body' ).append( $element );

						});


					}
    		}
				collision()
				{
					var a = new Object();
					var current_elem = this;
					this.world.elements.forEach( function( elem, tasoeur, lamoche )
					{

						if ( current_elem.id != elem.id ) {


							a = collision_sharpe(
								current_elem.pos_center().x,
								current_elem.pos_center().y,
								elem.pos_center().x,
								elem.pos_center().y );

								if ( a.hyp < ( current_elem.radius() ) + ( elem.radius() ) ) {

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
		dev_mode_function()
		{
			var father = this;
			this.list_force.forEach( function( elem ){

				var pos = { x1 : father.pos_center().x, y1 : father.pos_center().y};
				var color = '#fff'
				if ( elem == 'x') {
					 pos.x2 = father.speed_x;
					 pos.y2 = 0;
					 color = 'red';
				}
				else if (elem == 'y') {
					pos.x2 = 0;
					pos.y2 = -father.speed_y;
					color = 'blue';
				}
				else{
					pos.x2 = father.speed_x;
 					pos.y2 = father.speed_y;
					color = 'pink';
				}

				$('#' + father.id + 'force' + elem).clearCanvas();

				$( '#' + father.id + 'force' + elem ).drawLine({
				  strokeStyle: color,
				  strokeWidth: 2,
				  x1: 0, y1: 0,
				  x2: pos.x2*4, y2: pos.y2*4
				}).css({
					left : father.pos_center().x,
					top : father.pos_center().y
				});


			});


		}

}
