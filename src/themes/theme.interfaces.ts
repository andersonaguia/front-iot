interface ThemeColors {
  primary: string;
  off: string;
  on: string;
  normal: string;
  alert: string;
  high: string;
};

interface ThemeText {
  primary: string;
  secondary: string;
  on: string;
  off: string;  
};

export interface CustomTheme {
  colors: ThemeColors;
  text: ThemeText;
  opacity: number;
};
