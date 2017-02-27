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

    			var centerX = this.width / 2;
    			var centerY = this.width / 2;
    			var radius = this.width / 2;

    			var context = document.getElementById( this.id ).getContext('2d');
					console.log(this.id);
					console.log([centerX, centerY, radius]);

    			context.beginPath();

    			context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
					//context.arc(centerX, centerY, 70, 0, 2 * Math.PI, false);
    			context.fillStyle = this.material.color;
    			context.lineWidth = 5;
    			// context.strokeStyle = this.material.color;

					context.fill();
    			// context.stroke();

					this.created = true;

    		}
    pos_center() {
        return (this.pos_x + this.width / 2) + (this.pos_y + this.height / 2);
    }

}
