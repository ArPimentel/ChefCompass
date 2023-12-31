import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConverterRecipesService {
  constructor() {}

  calculateTotalTime(recipe: any): string {
    const totalTime = recipe.prepTime + recipe.cookTime;
    return this.timeString(totalTime);

  }
  timeString(time: number): string {
    if (time < 60) {
      return time + ' min';
    } else {
      const hours = Math.floor(time / 60);
      const minutes = time % 60;
      return hours + 'h ' + minutes + ' min';
    }
  }
}



  extractTimeInMinutes(timeString: string): number {
    if (timeString.includes('hour')) {
      const hours = parseInt(timeString.split(' ')[0], 10);
      return hours * 60;
    } else {
      return parseInt(timeString.split(' ')[0], 10);
    }
  }
  getPriceSymbol(price: number): string {
    if (price <= 15) {
      return '€';
    } else if (price <= 25) {
      return '€€';
    } else if (price <= 35) {
      return '€€€';
    } else {
      return '€€€€';
    }
  }

   getFormattedRecipeName(recipe:string) {
    return recipe.replace(/-/g, ' ');
  }

