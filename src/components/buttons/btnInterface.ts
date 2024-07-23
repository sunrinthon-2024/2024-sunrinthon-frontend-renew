import React from 'react';

interface btnProps {
  type: 'white' | 'primary' | 'secondary' | 'disabled';
  contents: string;
  Icon?: React.ReactNode;
  onPress: () => void;
}

export type { btnProps };
