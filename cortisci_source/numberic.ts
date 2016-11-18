import { NumberValitor as NumberValidator } from './package'; 

export class Numberic implements NumberValidator 
{
	public isNumber( value :number ) :boolean 
	{
		return typeof value === 'number';
	}
}