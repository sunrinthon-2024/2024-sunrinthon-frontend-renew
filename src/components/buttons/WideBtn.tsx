import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { palette } from 'styles';
import { Semi16 } from 'components/typo';
import { btnProps } from 'components/buttons/btnInterface.ts';

function WideBtn({ type, contents, Icon, onPress }: btnProps) {
  const local = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
      backgroundColor:
        type === 'white'
          ? palette.white
          : type === 'primary'
          ? palette.primary
          : type === 'secondary'
          ? palette.gray
          : palette.textGray,
      width: '100%',
      borderRadius: 52,
      paddingVertical: 18,
    },
  });

  return (
    <TouchableOpacity
      style={local.container}
      disabled={type === 'disabled'}
      onPress={onPress}>
      {Icon && Icon}
      <Semi16
        color={
          type === 'white'
            ? 'textBlack'
            : type === 'secondary'
            ? 'primary'
            : 'white'
        }>
        {contents}
      </Semi16>
    </TouchableOpacity>
  );
}

export default WideBtn;
