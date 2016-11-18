interface OncePath 
{
	lastTime :number;
	pathString :string;
} 

let oncePath :OncePath[] = [];

function buildPath ( path ) :string
{
	var regexp = /(.\/)(.*)/;
	var result = regexp.exec( path );
	if( result ) 
	{
		return result[ 1 ] + 'js/' + result[ 2 ] + '.js';
	}
} 

function require ( path, global :boolean = false ) :any
{
	let url = path;
	
	if( !global ) 
	{
		url = buildPath( path ); 
	}

	const exports = 'exports';
	let xhr = new XMLHttpRequest();
	xhr.open( 'GET', url, false );
	xhr.send( null ); 
	return (function() 
	{
		var module = ( global ) ? window : {};
		var exporter = new Function( exports, xhr.responseText ); 
		exporter.apply( window, [ module ] );
		return module;
	})();
} 

function include_once( path ) 
{
	for( let i = 0; i < oncePath.length; i++ ) 
	{
		if( oncePath[ i ].pathString == path ) 
		{
			oncePath[ i ].lastTime += 1;
			return;
		}
	}
	
	require( path, true ); 
	
	var time = 0;
	
	var include_time :OncePath = 
	{
		lastTime: time, 
		pathString: path,
	};
	
	oncePath.push( include_time );
}

function include ( url :string, callback ? :any ) :void
{
	var head = document.getElementsByTagName( 'HEAD' )[ 0 ];
	var script = document.createElement( 'script' );
	script.src = url;
	script.async = false;
	script.type = 'text/javascript'; 
	script.onload = function( e ) 
	{
		if( callback ) 
		{
			callback( e ); 
		}
	}
	head.appendChild( script );
}