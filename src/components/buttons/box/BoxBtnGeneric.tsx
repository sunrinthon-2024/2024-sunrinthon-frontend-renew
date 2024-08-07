import { TouchableOpacity } from 'react-native';
import React from 'react';
import { BoxBtnGenericContainer } from 'components/containers';

function BoxBtnGeneric({
  children,
  onPress,
}: {
  children: React.ReactNode;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={onPress}>
      <BoxBtnGenericContainer>{children}</BoxBtnGenericContainer>
    </TouchableOpacity>
  );
}

export default BoxBtnGeneric;
