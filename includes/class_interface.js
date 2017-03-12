////////////////////////////////////
//  The interface for help
///////////////////////////////////
// @param query Object -- the query selector
///////////////////////////////////////////////////////

class ui_interface {

    constructor() {
				this.query = new Object()
				this.create();

        }
		create()
		{

				var $content = $( '<div>' ).attr({
					id : 'ui_inferface'
				});

				$('body').append( $content );
		}

}
