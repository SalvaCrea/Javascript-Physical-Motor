////////////////////////////////////
//  The elements for our sharpe
///////////////////////////////////

// @param name string - The name of material

// @param color string - The color of the material in hexadecimal

// @param opacity float - The transparance of the materiau

// @param mass float - The mass of the object

// @param magnetic float - the magnetic attitude

// @param resilience float - The capacity for absorb choc

// @param attraction float -The attraction beetween sharp

// @param repulsion float - the repulsion beetween element

// @param dilation float -The deformation by the temperature

class material
{
  constructor()
  {

    this.name = 'default';

    this.color = '#a2bae0';

    this.opacity = 0.9;

    this.mass = 1;

    this.magnetic = 0;

    this.resilience = 0.9;

    this.attraction = 0;

    this.attraction = 0;

    this.dilation = 1;

		return this;
  }
}
