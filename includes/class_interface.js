////////////////////////////////////
//  The interface for help
///////////////////////////////////
// @param query Object -- the query selector
///////////////////////////////////////////////////////

class ui_interface {

    constructor() {
				this.query = new Object()
				this.create();

        $( 'body' ).on( 'click', '.circle', this.select_sharpe);

        }
		create()
		{

				var $content = $( '<div>' ).attr({
					id : 'ui_inferface'
				});

				$('body').append( $content );
		}
    select_sharpe()
    {
        alert('test');
    }

}
