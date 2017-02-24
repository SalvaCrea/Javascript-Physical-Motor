////////////////////////////////////
//  The elements for our sharpe
///////////////////////////////////

// @param name string - The name of material

// @param pos_x float - The position x of the elements

// @param pos_y float - The position y of the element

// @param speed_x float - The speed x of the elements

// @param speed_y float - The speed y of the element

// @param height float - THe height of the element

// @param width float - the width of the element

// @param materiel object - the constitution elemental

class element
{
	constructor()
	{

    this.name = 'undefined';

		this.pos_x = 0;
		this.pos_y = 0;

		this.speed_x = 0;
		this.speed_y = 0;

		this.width = 10;
		this.height = 10;

	}
  // return the somme of height and width
  size()
  {
    return Math.sqrt( ( this.width * this.width ) + ( this.height * this.height ) );
  }

}
