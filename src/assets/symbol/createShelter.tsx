import Svg, { G, Mask, Path, Rect } from 'react-native-svg';

function createShelter(size: number) {
  return (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      <Rect width={size} height={size} rx={size / 2} fill="#7E5EFF" />
      <Mask
        id="mask0"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="5"
        y="5"
        width="14"
        height="14">
        <Rect x="5" y="5" width="14" height="14" fill="#D9D9D9" />
      </Mask>
      <G mask="url(#mask0)">
        <Path
          d="M10.3621 16.375V13.0993H13.6379V16.375H10.3621ZM11.2371 15.5H12.7629V13.9743H11.2371V15.5ZM6.40117 12.3589L5.875 11.6612L12 7.04163L14.4342 8.87125V7.62496H15.8589V9.9494L18.1305 11.6612L17.6045 12.3589L12 8.14427L6.40117 12.3589Z"
          fill="white"
        />
      </G>
    </Svg>
  );
}

export default createShelter;
