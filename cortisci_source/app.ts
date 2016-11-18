include_once( './cordova.js' );

export class app 
{
	public static initialize() 
	{
		app.bindEvents();
	} 
	
	public static bindEvents() 
	{
		document.addEventListener('deviceready', app.onDeviceReady, false);
	} 
	
	public static onDeviceReady( event :any ) 
	{
		app.receivedEvent( 'deviceready' );
	} 
	
	public static receivedEvent( eventType :string ) 
	{
		if( eventType == 'deviceready' ) 
		{
			document.addEventListener('pause', app.onPause, false);
			document.addEventListener('resume', app.onResume, false);
			document.addEventListener('menubutton', app.onMenuKeyDown, false);
			app.start();
		}
	} 
	
	public static onPause( event :any ) 
	{
		
	} 
	
	public static onResume( event :any )
	{
		
	} 
	
	public static onMenuKeyDown( event :any ) 
	{
		
	} 
	
	public static start() 
	{
		console.log( 'device ready' );
	}
}