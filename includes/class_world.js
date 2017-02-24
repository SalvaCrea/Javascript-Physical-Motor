////////////////////////////////////
//  The world that contain elements
///////////////////////////////////

// @param name string - The name of the world

// @param color string - The color of the world in hexadecimal

// @param gravity float  - The gravity exerce in the world

// @param fresh_air float  - The fresh air in the world

// @param width float  - The width of the world

// @param height  float  - The height of the world

class world
{
  constructor()
  {

    this.name = 'The world';

    this.background_color = '#140';

    this.gravity = 10;

    this.fresh_air = 1;

    this.width = $( window ).width();

    this.width = $( window ).height();

  }
}
