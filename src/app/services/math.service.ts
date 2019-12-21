import { Injectable } from '@angular/core';

/**
  Provider for super difficult math operations
*/
@Injectable()
export class MathProvider {

  /**
    Value of the last operation
  */
  storedValued: number;

  /**
   * @ignore
   */
  constructor() { }

    /**
   * Performs a very special operation
   * 
   * @example
   * Simply call it with 2 numbers: 
   * getResult(2, 3)
   * 
   * @param {number} a First number
   * @param {number} b Second number
   * @returns The sum of a and b
   */
	getResult(a: number, b: number) : number {
		let sum = a + b;
		this.storedValued = sum;
		return sum;
	}

}