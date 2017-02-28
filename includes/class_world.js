////////////////////////////////////
//  The world that contain elements
///////////////////////////////////

///////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//
// @param name string - The name of the world
//
// @param color string - The color of the world in hexadecimal
//
// @param gravity float  - The gravity exerce in the world
//
// @param fresh_air float  - The fresh air in the world
//
// @param width float  - The width of the world
//
// @param height  float  - The height of the world
//
// @param elements  array  - The list of the elements of terrain
// @param element_created  int  - The number of element created
//
// @param list_material  array  - The list of the material
//
// @param frequence  int  - THe frequence of execution of the world
//
// @param render object - the motor of render
//
// @param collision object - the motor of collision
//
// @param time int - the time execute in milliseconde
//
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

class world_atom
{

  constructor()
  {

    this.name = 'The world';

    this.background_color = '#D7EEFF';

    this.gravity = 10;

    this.fresh_air = 1;

    this.width = $( window ).width();

    this.height = $( window ).height();

    // the list of elements
    this.list_element = new Array();
    this.list_element.push( new element );

		// list elements in the world
		this.elements = new Array();
    this.element_created = 0;

    // create the first material by default
    this.list_material = new Array();
    this.list_material.push( new material );

    // create the first material by default
    this.collision = new collision();

		this.frequence = 30;

		this.time = 0;

  }
	// create the world
	create()
	{

    ////////////////////////////////
    // Start - create the dom of the world
    ////////////////////////////////

		var $world = $('<div>')
								.attr({

									id : 'world',
                  class : 'world'

								}).css({
                  position : 'relative'
                });

		$('body').append( $world );

    ////////////////////////////////
    // End - create the dom of the world
    ////////////////////////////////

    this.set_world();

	}
  // modify the world present
  set_world()
  {

      $('#world').css({

        background : this.background_color,
        width : this.width,
        height : this.height

      });

  }
  // add element in the world
  add_element( elem )
  {

    if ( !elem.type )
    {
      elem.type = 'circle';
    }

    if ( !elem.material )
    {
      elem.material = 'basic';
    }

      var curent_element = eval("new " + elem.type + "()");

      curent_element = Object.assign( curent_element, elem);

      curent_element.material = eval("new " + elem.material + "()");

      curent_element.id = this.element_created;

			curent_element.world = this;

      curent_element.create();

      this.element_created++;

      this.elements.push( curent_element );

  }
  add_material( elem )
  {

    var material = new material();
    material = Object.assign({}, material, elem);

    this.list_material.push( material );

  }
  // function repeat by frequence
	core()
	{

      this.time_manager();

      this.elements.forEach( function( elem ){
            elem.core();
      });
	}
  // permet de gérer le temps
  time_manager()
  {
      var time = 1 / this.frequence;
      this.time += time;
  }
  // function for start the world
	start()
	{
			this.core_run = setInterval( "world.core()" , 1000 / this.frequence );
	}
  // function for stop the world
	stop()
	{
		  clearInterval( this.core_run );
	}
}
