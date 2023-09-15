export interface User {
  id: number
  firstName: string;
  lastName: string;
  fullName?: string;
  phoneNumber: number;
  email: string;
  gender: string;
  age: number;
  relationshipStatus: string;
  visitedCities: string[];
}
