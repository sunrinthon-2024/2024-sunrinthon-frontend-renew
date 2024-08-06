import { Row12, Row5, Row8, RowSpacebetween } from 'components/containers';
import { ImageLogo, TextLogo } from 'assets/logos';
import React from 'react';
import {
  ArrowBtn,
  EditBtn,
  MyBtn,
  SettingBtn,
  StarBtn,
} from 'components/buttons';

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
}

const Logo = () => (
  <Row5 alignItems="center">
    <ImageLogo />
    <TextLogo />
  </Row5>
);

function Header({
  isLogo,
  isArrow,
  arrowSize,
  isStar,
  isMy,
  isEdit,
  isSetting,
  Title,
  isSearch,
}: headerPropsType) {
  return (
    <RowSpacebetween alignItems="center" paddingHorizontal={12} width="100%">
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
        {isMy && <MyBtn />}
        {isEdit && <EditBtn />}
        {isSetting && <SettingBtn />}
      </Row8>
    </RowSpacebetween>
  );
}

export { Header };
