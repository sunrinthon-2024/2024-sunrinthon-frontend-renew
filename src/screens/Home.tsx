import { GenericLayout } from 'components/layouts';
import {
  Col0,
  Col10,
  Col12,
  Col20,
  Col40,
  Col8,
  Row12,
  Row8,
  RowSpacebetween,
} from 'components/containers';
import { Medium12, Medium14, Medium16, Semi16, Semi28 } from 'components/typo';
import { SearchBar } from 'components/inputs';
import { BoxBtnGeneric, BoxBtnPrimary } from 'components/buttons';
import { CheckFacilityToMap, RegisterNewSituation } from 'assets';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Destruction24, Raid24, Sheleter24 } from 'assets/symbol';
import { StarMedium } from 'assets/buttonIcons';
import { useNavigation } from '@react-navigation/native';

function Home() {
  return (
    <GenericLayout
      gap={40}
      headerProps={{
        backgroundColor: 'gray',
        isLogo: true,
        isStar: true,
        isMy: true,
      }}>
      <Col40>
        <Col20>
          <PresentNationAndPosition />
          <Col12>
            <SearchBar
              type="white"
              placeholder="궁금하신 상황을 검색해주세요"
            />
            <MainFunctionArea />
          </Col12>
        </Col20>
        <SubfunctionList
          headTitle="현재 국가 및 위치 상황"
          Subhead={
            <TouchableOpacity>
              <Medium16>모두 보기</Medium16>
            </TouchableOpacity>
          }>
          <BoxBtnGeneric onPress={() => {}}>
            <RowSpacebetween width="100%" alignItems="center">
              <Row8 alignItems="center">
                {Destruction24}
                <Medium16>Nikopol 구</Medium16>
              </Row8>
              <Medium14 color="textGray">오늘 오전 8:37분</Medium14>
            </RowSpacebetween>
            <Semi16>테러 경고(포탄)</Semi16>
          </BoxBtnGeneric>
          <BoxBtnGeneric onPress={() => {}}>
            <RowSpacebetween width="100%" alignItems="center">
              <Row8 alignItems="center">
                {Raid24}
                <Medium16>Kharkiv 지역</Medium16>
              </Row8>
              <Medium14 color="textGray">오늘 오전 8:37분</Medium14>
            </RowSpacebetween>
            <Semi16>공습 경보(Air raid alert)</Semi16>
          </BoxBtnGeneric>
        </SubfunctionList>
        <SubfunctionList headTitle="키이우에서 가장 많이 이용한 장소">
          <BoxBtnGeneric onPress={() => {}}>
            <RowSpacebetween width="100%" alignItems="center">
              <Row8 alignItems="center">
                {Sheleter24}
                <Semi16>Poshtova ploshcha</Semi16>
              </Row8>
              <StarMedium />
            </RowSpacebetween>
            <Row8 alignItems="center">
              <Medium12 color="textGray">지하철역 / 피난처</Medium12>
              <Dot />
              <Medium12 color="textGray">1.2km</Medium12>
              <Dot />
              <Medium12 color="textGray">이용 가능</Medium12>
            </Row8>
            <Medium16 color="textGray">
              현재 이런 피난처를 모집하고 있어요
            </Medium16>
          </BoxBtnGeneric>
          <BoxBtnGeneric onPress={() => {}}>
            <RowSpacebetween width="100%" alignItems="center">
              <Row8 alignItems="center">
                {Sheleter24}
                <Semi16>Shuliavka구, 19230</Semi16>
              </Row8>
              <StarMedium />
            </RowSpacebetween>
            <Row8 alignItems="center">
              <Medium12 color="textGray">피난처</Medium12>
              <Dot />
              <Medium12 color="textGray">13km</Medium12>
              <Dot />
              <Medium12 color="textGray">총 4명 수용 가능</Medium12>
              <Dot />
              <Medium12 color="textGray">최대 3일</Medium12>
            </Row8>
          </BoxBtnGeneric>
          <BoxBtnGeneric onPress={() => {}}>
            <RowSpacebetween width="100%" alignItems="center">
              <Row8 alignItems="center">
                {Sheleter24}
                <Semi16>Shuliavka구, 19230</Semi16>
              </Row8>
              <StarMedium />
            </RowSpacebetween>
            <Row8 alignItems="center">
              <Medium12 color="textGray">피난처</Medium12>
              <Dot />
              <Medium12 color="textGray">13km</Medium12>
              <Dot />
              <Medium12 color="textGray">총 4명 수용 가능</Medium12>
              <Dot />
              <Medium12 color="textGray">최대 3일</Medium12>
            </Row8>
          </BoxBtnGeneric>
        </SubfunctionList>
      </Col40>
    </GenericLayout>
  );
}

const Dot = () => (
  <View
    style={{ borderRadius: 4, width: 4, height: 4, backgroundColor: '#9A9A9A' }}
  />
);

const SubfunctionList = ({
  headTitle,
  Subhead,
  children,
}: {
  headTitle: string;
  Subhead?: React.ReactNode;
  children: React.ReactNode;
}) => (
  <Col20 flex={1}>
    <RowSpacebetween width="100%" alignItems="center">
      <Medium16 color="textGray">{headTitle}</Medium16>
      {Subhead && Subhead}
    </RowSpacebetween>
    <Col8 flex={1}>{children}</Col8>
  </Col20>
);

const MainFunctionArea = () => {
  const navigation = useNavigation();
  return (
    <Row12>
      <BoxBtnPrimary
        onPress={() => {
          navigation.navigate('Map');
        }}>
        <Col0>
          <Medium16>지도에서</Medium16>
          <Medium16>시설 확인하기</Medium16>
        </Col0>
        <CheckFacilityToMap style={{ position: 'absolute', right: 0 }} />
      </BoxBtnPrimary>
      <BoxBtnPrimary onPress={() => {}}>
        <Col0>
          <Medium16>미등록 상황</Medium16>
          <Medium16>등록하기</Medium16>
        </Col0>
        <RegisterNewSituation />
      </BoxBtnPrimary>
    </Row12>
  );
};

const PresentNationAndPosition = () => (
  <Col10>
    <Medium16 color="textGray">현재 국가 및 위치</Medium16>
    <Semi28 color="primary">우크라이나 키이우</Semi28>
  </Col10>
);

export default Home;
