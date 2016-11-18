import StringValitor from './package';

export class Stringy implements StringValitor 
{
	public isAcceptable( s :string ) :boolean 
	{
		return s.length && true;
	}
} 