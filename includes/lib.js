////////////////////////////////////
//  List of little function
///////////////////////////////////

function getRandomInt(min, max) {

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;

}
function pythagore( ab, ac)
{
		return Math.sqrt(  Math.pow( ab, 2) + Math.pow( ac, 2) );
}
// convertie des radians en degres
function convert_rad_deg( rad )
{
	return rad / ( Math.PI / 180 );
}
// convertie des degres en degres
function convert_deg_rad( deg )
{
	return rad * ( Math.PI / 180 );
}
function collision_sharpe( pos_a_x, pos_a_y, pos_b_x, pos_b_y )
{

		 var sharpe = new Object();
		 sharpe.a =  pos_a_x - pos_b_x;
		 sharpe.b =  pos_a_y - pos_b_y;
		 // longeur hyp
		 sharpe.hyp = pythagore( sharpe.a, sharpe.b);
		 // tangeante
		 sharpe.tan = convert_rad_deg( Math.tan( sharpe.a / sharpe.b ) );
		 // cosinus
		 sharpe.cos = convert_rad_deg( Math.cos( sharpe.a /  sharpe.hyp ) );
		 // sinus
		 sharpe.sin = convert_rad_deg( Math.sin( sharpe.b /  sharpe.hyp ) );

		 return sharpe;

}
