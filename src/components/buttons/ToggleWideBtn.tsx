import { TouchableOpacity, StyleSheet } from 'react-native';
import { btnProps } from 'components/buttons/btnInterface.ts';
import palette from 'styles/palette.ts';
import { Medium20, Semi20 } from 'components/typo';
import React from 'react';

interface toggleBtnProps extends btnProps {
  isToggle: boolean;
  ToggledIcon?: React.ReactNode;
}

function ToggleWideBtn({
  type,
  contents,
  Icon,
  ToggledIcon,
  isToggle,
  onPress,
  disabled,
}: toggleBtnProps) {
  const localStyle = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
      width: '100%',
      paddingVertical: 18,
      borderRadius: 52,
      backgroundColor: palette.white,
    },
  });
  return (
    <TouchableOpacity
      style={localStyle.container}
      onPress={onPress}
      disabled={type === 'disabled' || disabled}>
      {isToggle ? ToggledIcon && ToggledIcon : Icon && Icon}
      {isToggle ? (
        <Semi20 color="primary">{contents}</Semi20>
      ) : (
        <Medium20 color="textGray">{contents}</Medium20>
      )}
    </TouchableOpacity>
  );
}

export default ToggleWideBtn;
