import React, { createContext, useContext } from 'react';
import { DimensionValue, FlexAlignType, StyleSheet, View } from 'react-native';

interface RowColumnStyles {
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: FlexAlignType;
  width?: DimensionValue;
  paddingVertical?: number;
  paddingHorizontal?: number;
  padding?: [number, number, number, number];
}

interface RowOrColumnContextType extends RowColumnStyles {
  flexDirection: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  gap: number;
}

interface RowColumnProps extends RowColumnStyles {
  children?: React.ReactNode;
}

const RowOrColumnContext = createContext<RowOrColumnContextType>({
  flexDirection: 'column',
  gap: 0,
});

function RowOrColumnWrapper({ children }: { children: React.ReactNode }) {
  const context = useContext(RowOrColumnContext);
  const style = StyleSheet.create({
    config: {
      flexDirection: context.flexDirection,
      gap: context.gap,
      justifyContent: context.justifyContent
        ? context.justifyContent
        : 'flex-start',
      alignItems: context.alignItems ? context.alignItems : 'flex-start',
      width: context.width ? context.width : 'auto',
      paddingVertical: context.paddingVertical,
      paddingHorizontal: context.paddingHorizontal,
      paddingTop: context.padding && context.padding[0],
      paddingRight: context.padding && context.padding[1],
      paddingBottom: context.padding && context.padding[2],
      paddingLeft: context.padding && context.padding[3],
    },
  });
  return <View style={style.config}>{children}</View>;
}

export default function createRowOrColumn({
  flexDirection,
  gap,
}: RowOrColumnContextType) {
  return (props: RowColumnProps) => {
    const config = { flexDirection, gap, ...props };
    return (
      <RowOrColumnContext.Provider value={config}>
        <RowOrColumnWrapper>{props.children}</RowOrColumnWrapper>
      </RowOrColumnContext.Provider>
    );
  };
}
