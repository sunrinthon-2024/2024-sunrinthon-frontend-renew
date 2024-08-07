import { TouchableOpacity } from 'react-native';
import { BoxBtnPrimaryContainer } from 'components/containers';
import React from 'react';

function BoxBtnPrimary({
  children,
  onPress,
}: {
  children: React.ReactNode;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={onPress}>
      <BoxBtnPrimaryContainer flex={1}>{children}</BoxBtnPrimaryContainer>
    </TouchableOpacity>
  );
}

export default BoxBtnPrimary;
