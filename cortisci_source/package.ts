export interface StringValitor 
{
	isAcceptable( s :string ) :boolean;
} 

export interface NumberValitor 
{
	isNumber( value :number ) :boolean;
} 

export interface packageA 
{
	stringvalitor :StringValitor;
	numbervalitor :NumberValitor;
} 

export { StringValitor as default };