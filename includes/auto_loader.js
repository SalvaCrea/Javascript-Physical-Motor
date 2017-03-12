function auto_load( ListLinks )
{

	ListLinks.forEach( function( ListLinks ){
		var s = document.createElement("script") ;
		s.type = "text/JavaScript" ;
		s.src = ListLinks.src ;
		s.async = false ;
		// puis on l’insère dans la balise <head> en haut de document
		var head = document.head || document.getElementsByTagName("head")[0] ;
		head.appendChild(s) ;
	} );

}

ListLink = [
	{
			name : 'jquery',
			src : './bower_components/jquery/dist/jquery.min.js',
	},
	{
			name : 'jCanvas',
			src : './bower_components/jcanvas/jcanvas.min.js',
	},
	{
			name : 'angular',
			src : './bower_components/angular/angular.min.js',
	},
	{
			name : 'interface',
			src : './includes/class_interface.js',
	},
	{
			name : 'class_collision',
			src : './includes/class_collision.js',
	},
	{
			name : 'class_element',
			src : './includes/class_element.js',
	},
	{
			name : 'extend_element_circle',
			src : './includes/elements/circle.js',
	},
	{
			name : 'class_material',
			src : './includes/class_material.js',
	},
	{
			name : 'class_material_default',
			src : './includes/materials/default.js',
	},
	{
			name : 'class_world',
			src : './includes/class_world.js',
	},
	{
			name : 'lib',
			src : './includes/lib.js',
	},
	{
			name : 'app',
			src : './app/app.js',
	}
];

auto_load( ListLink );
