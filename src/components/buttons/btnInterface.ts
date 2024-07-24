import React from 'react';

interface btnProps {
  type: 'white' | 'primary' | 'secondary' | 'disabled';
  contents: string;
  Icon?: React.ReactNode;
  disabled?: boolean;
  onPress: () => void;
}

export type { btnProps };
