import { Stringy as Stringy } from './stringy'
import { Numberic as Numberic } from './numberic'
import { app as App } from './app'

let $ :any;
let element5 :any;
include_once( './js/jquery.js' );
include_once( './js/element5.js' ); 

/////////////////////////////////////////////////////////////////////////////////////////////////////////

function main ( context, showCmd ) :void 
{
	// Initialize handle for applicaton
	let handle = element5.GetBody(); 
	
	if( !showCmd ) 
	{
		handle.css( 'display', 'block' );
		console.log( 'com' );
	}
	
	App.initialize();
}
