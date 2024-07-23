import React, { createContext, useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import { palette } from 'styles';
import { typoContextType, typoProps } from 'components/typo/typoInterface.ts';

const TypoContext = createContext<typoContextType>({
  fontSize: 0,
  fontWeight: '500',
});

function TypoWrapper({ children }: { children: string }) {
  const context = useContext(TypoContext);
  const style = StyleSheet.create({
    config: {
      fontFamily: 'Pretendard Variable',
      fontWeight: context.fontWeight,
      fontSize: context.fontSize,
      color: context.color ? palette[context.color] : palette.textBlack,
    },
  });
  return <Text style={[style.config, context.style]}>{children}</Text>;
}

function createTypo({ fontSize, fontWeight }: typoContextType) {
  return (props: typoProps) => {
    const value = { fontSize, fontWeight, ...props };
    return (
      <TypoContext.Provider value={value}>
        <TypoWrapper>{`${props.children}`}</TypoWrapper>
      </TypoContext.Provider>
    );
  };
}

export const Medium12 = createTypo({ fontSize: 12, fontWeight: '500' });
export const Medium14 = createTypo({ fontSize: 14, fontWeight: '500' });
export const Medium16 = createTypo({ fontSize: 16, fontWeight: '500' });
export const Medium18 = createTypo({ fontSize: 18, fontWeight: '500' });
export const Medium20 = createTypo({ fontSize: 20, fontWeight: '500' });
export const Medium28 = createTypo({ fontSize: 28, fontWeight: '500' });
export const Medium36 = createTypo({ fontSize: 36, fontWeight: '500' });

export const Semi14 = createTypo({ fontSize: 14, fontWeight: '600' });
export const Semi16 = createTypo({ fontSize: 16, fontWeight: '600' });
export const Semi20 = createTypo({ fontSize: 20, fontWeight: '600' });
export const Semi24 = createTypo({ fontSize: 24, fontWeight: '600' });
export const Semi28 = createTypo({ fontSize: 28, fontWeight: '600' });
export const Semi36 = createTypo({ fontSize: 36, fontWeight: '600' });

export const Bold14 = createTypo({ fontSize: 14, fontWeight: '700' });
export const Bold16 = createTypo({ fontSize: 16, fontWeight: '700' });
export const Bold20 = createTypo({ fontSize: 20, fontWeight: '700' });
export const Bold28 = createTypo({ fontSize: 28, fontWeight: '700' });
