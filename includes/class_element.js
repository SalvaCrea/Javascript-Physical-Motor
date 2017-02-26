////////////////////////////////////
//  The elements for our sharpe
///////////////////////////////////
// @param id string - The id of material
// @param name string - The name of material
// @param type string - The name of material
// @param pos_x float - The position x of the elements
// @param pos_y float - The position y of the element
// @param speed_x float - The speed x of the elements
// @param speed_y float - The speed y of the element
// @param height float - THe height of the element
// @param width float - the width of the element
// @param materiel object - the constitution elemental
// @param created boolean - if the eleme is created in the dom
///////////////////////////////////////////////////////

class element {
    constructor() {
						this.id = 'undefined';
            this.type = 'circle';
            this.pos_x = 0;
            this.pos_y = 0;
            this.speed_x = 0;
            this.speed_y = 0;
            this.width = 10;
            this.height = 10;
            this.temperature = 0;
            this.material = new Object();
						this.created = false;
        }
		core( world )
		{
				this.render();
		}
		create()
		{

			var $element = $( '<canvas>' )
			.attr({

				id : this.id,
				class : this.type,

			}).css({
				position : 'absolute',
				width : this.width,
				height : this.height,
				'opacity' : this.material.opacity
			});

			$( '#world' ).append( $element );

			var centerX = this.width / 2;
			var centerY = this.height / 2;
			var radius = this.width;

			var context = document.getElementById( this.id ).getContext('2d');
			context.beginPath();
			context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
			context.fillStyle = this.material.color;
			context.fill();
			context.lineWidth = 5;
			context.strokeStyle = this.material.color;
			context.stroke();

		}
		remove()
		{
				$( '#' + this.id ).remove();
		}
		render()
		{
			console.log(this.id)
			$( '#' + this.id ).css({

					'left' : this.pos_x,
					'top' : this.pos_y,

			});

		}
    // return the somme of height and width
    size() {
        return this.width;
    }
    height() {
        return this.height;
    }
    width() {
        return this.width;
    }
    pos_center() {
        return (this.pos_x + this.width() / 2) + (this.pos_y + this.heigth() / 2);
    }
    change_temperature() {}
}
