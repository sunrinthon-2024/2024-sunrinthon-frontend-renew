import { GenericLayout } from 'components/layouts';
import { Col10, Col12, Col20, Col40 } from 'components/containers';
import { Medium16, Semi28 } from 'components/typo';
import { SearchBar } from 'components/inputs';

function Home() {
  return (
    <GenericLayout
      gap={40}
      headerProps={{
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
          </Col12>
        </Col20>
      </Col40>
    </GenericLayout>
  );
}

const PresentNationAndPosition = () => (
  <Col10>
    <Medium16 color="textGray">현재 국가 및 위치</Medium16>
    <Semi28 color="primary">우크라이나 키이우</Semi28>
  </Col10>
);

export default Home;
