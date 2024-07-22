import { StyleProp, TextStyle } from 'react-native';

interface typoProps {
  color?: 'primary' | 'gray' | 'white' | 'textBlack' | 'textGray';
  style?: StyleProp<TextStyle>;
  children?: string;
}

interface typoContextType extends typoProps {
  fontSize: number;
  fontWeight: '500' | '600' | '700';
}

export type { typoProps, typoContextType };
