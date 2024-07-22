import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { palette } from 'styles';

interface WideBtnProps {
  type: 'white' | 'primary' | 'secondary' | 'disabled';
  contents: string;
  Icon: React.ReactNode;
}

function WideBtn({ type, contents, Icon }: WideBtnProps) {
  const style = StyleSheet.create({
    container: {
      flexDirection: 'row',
      gap: 12,
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
    },
  });

  return (
    <TouchableOpacity style={style.container}>

    </TouchableOpacity>
  );
}

export default WideBtn;
