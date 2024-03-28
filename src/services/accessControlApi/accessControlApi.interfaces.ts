export interface apiResponse {
  code: number;
  message: string;
}

export interface AccessDoors {
  doorId: number;
  isOpen: boolean;
  cardNumber: string;
}
