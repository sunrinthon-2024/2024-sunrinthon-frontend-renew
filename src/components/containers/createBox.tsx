import React, { createContext, useContext } from 'react';
import { View, StyleSheet, FlexAlignType, ViewStyle } from 'react-native';
import { palette } from 'styles';

interface boxStyleInterface {
  flex?: number;
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: FlexAlignType;
  gap?: number;
  backgroundColor?: 'primary' | 'white' | 'gray' | 'textBlack' | 'textGray';
  style?: ViewStyle;
}
interface boxContextInterface extends boxStyleInterface {
  paddingVertical: number;
  paddingHorizontal: number;
  borderRadius: number;
}
interface boxProps extends boxStyleInterface {
  children: React.ReactNode;
}

const BoxContext = createContext<boxContextInterface>({
  paddingHorizontal: 0,
  paddingVertical: 0,
  borderRadius: 0,
});
const BoxWrapper = ({ children }: boxProps) => {
  const context = useContext(BoxContext);
  const style = StyleSheet.create({
    config: {
      flex: context.flex,
      flexDirection: context.flexDirection,
      justifyContent: context.justifyContent,
      alignItems: context.alignItems,
      gap: context.gap,
      paddingHorizontal: context.paddingHorizontal,
      paddingVertical: context.paddingVertical,
      borderRadius: context.borderRadius,
      backgroundColor:
        palette[context.backgroundColor ? context.backgroundColor : 'white'],
    },
  });
  return <View style={[style.config]}>{children}</View>;
};

export default function createBox({
  flex,
  flexDirection,
  justifyContent,
  alignItems,
  gap,
  paddingVertical,
  paddingHorizontal,
  borderRadius,
  backgroundColor,
  style,
}: boxContextInterface) {
  return (props: boxProps) => {
    const config = {
      flex,
      flexDirection,
      justifyContent,
      alignItems,
      gap,
      paddingVertical,
      paddingHorizontal,
      borderRadius,
      backgroundColor,
      style,
      props,
    };
    return (
      <BoxContext.Provider value={config}>
        <BoxWrapper>{props.children}</BoxWrapper>
      </BoxContext.Provider>
    );
  };
}
