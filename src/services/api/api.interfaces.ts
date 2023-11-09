export interface apiResponse {
    code: number;
    message: string;
}
export interface newRelayState {
    relayId: number;
    expectedLevel: boolean;
    currentLevel: boolean;
  }