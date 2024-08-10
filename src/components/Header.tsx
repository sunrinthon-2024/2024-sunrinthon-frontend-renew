import { Row12, Row5, Row8, RowSpacebetween } from 'components/containers';
import { ImageLogo, TextLogo } from 'assets/logos';
import React from 'react';
import {
  ArrowBtn,
  EditBtn,
  MyBtn,
  StarBtn,
} from 'components/buttons';
import { View, StyleSheet } from 'react-native';
import { palette } from 'styles';
import LinearGradient from 'react-native-linear-gradient';

export interface headerPropsType {
  isLogo?: boolean;
  isArrow?: boolean;
  arrowSize?: 36 | 28;
  isStar?: boolean;
  isMy?: boolean;
  isEdit?: boolean;
  isSetting?: boolean;
  Title?: React.ReactNode;
  isSearch?: boolean;
  backgroundColor: 'gray' | 'gradient';
}

function Header({
  isLogo,
  isArrow,
  arrowSize,
  isStar,
  isMy,
  isEdit,
  Title,
  isSearch,
  backgroundColor,
}: headerPropsType) {
  const localStyle = StyleSheet.create({
    container: {
      backgroundColor:
        backgroundColor === 'gray' ? palette.gray : 'transparent',
      position: 'absolute',
      top: 0,
      paddingVertical: 8,
      zIndex: 9,
    },
  });
  return (
    <View style={localStyle.container}>
      <RowSpacebetween
        alignItems="center"
        paddingHorizontal={12}
        width="100%"
        style={{ zIndex: 9 }}>
        <Row12 alignItems="center">
          {isLogo && <Logo />}
          <Row8 alignItems="center">
            {isArrow && <ArrowBtn arrowSize={arrowSize} />}
            {Title && Title}
          </Row8>
          {isSearch}
        </Row12>
        <Row8 alignItems="center">
          {isStar && <StarBtn />}
          {isEdit && <EditBtn />}
          {isMy && <MyBtn />}
        </Row8>
      </RowSpacebetween>
      {backgroundColor === 'gradient' && <Gradient />}
    </View>
  );
}

const Logo = () => (
  <Row5 alignItems="center">
    <ImageLogo />
    <TextLogo />
  </Row5>
);

const Gradient = () => {
  const localStyle = StyleSheet.create({
    gradient: {
      position: 'absolute',
      top: 0,
      width: '100%',
      height: 182,
      zIndex: 8,
    },
  });
  return (
    <LinearGradient
      colors={['#F5F5F5', 'rgba(255, 255, 255, 0.0)']}
      style={localStyle.gradient}
    />
  );
};

export { Header };
