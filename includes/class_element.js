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
// @param world obect - it the current world
///////////////////////////////////////////////////////

class element {

    constructor() {
						this.id = 'undefined';
            this.type = 'undefined';
            this.pos_x = 0;
            this.pos_y = 0;
            this.speed_x = 0;
            this.speed_y = 0;
            this.width = 10;
            this.height = 10;
            this.temperature = 0;
            this.material = new Object();
						this.created = false;
						this.world = new Object();
        }
		core( world )
		{
				this.collision();
				this.move();
				this.render();

				if ( this.world.dev_mode ) {
						this.dev_mode_function();
				}
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

		}
		remove()
		{
				$( '#' + this.id ).remove();
		}
		render()
		{

			$( '#' + this.id ).css({

					'left' : this.pos_x,
					'top' : this.pos_y,

			});

		}
		collision()
		{

		}
		move()
		{
				this.pos_x += this.speed_x;
				this.pos_y += this.speed_y;
		}
		// return for get the weight
		weight()
		{
				return this.world.gravity * this.material.mass;
		}
		// return the energy
		energy()
		{
				return this.weight() * this.speed();
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
		dev_mode_function(){}
}
