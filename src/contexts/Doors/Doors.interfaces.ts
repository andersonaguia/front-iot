import { AccessDoors } from "../../services/accessControlApi/accessControlApi.interfaces";

export interface DoorsProviderProps {
  children: React.ReactNode;
}

export enum DoorsState {
  OPEN = 0,
  MAINTENANCE = 1,
  CLEANING = 2,
  CLOSED = 3,
}

export interface Door {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null | Date;
  name: string;
  readerModel: string;
  isOpen: boolean;
  state: DoorsState;
  registeredBy: number;
}

export interface DoorsInterfaces {
  handleFindAllDoors: () => void;
  handleAccessDoors: (data: AccessDoors) => void;
  doors: Door[];
}
