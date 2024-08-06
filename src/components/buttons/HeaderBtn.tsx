import { TouchableOpacity } from 'react-native';
import { IconBox8 } from 'components/containers';
import {
  Arrow28,
  Arrow36,
  Edit,
  My,
  Setting,
  StarBold,
} from 'assets/buttonIcons';
import React from 'react';

export const ArrowBtn = ({ arrowSize }: { arrowSize?: 36 | 28 }) => {
  return (
    <TouchableOpacity>
      <IconBox8>{arrowSize === 36 ? <Arrow36 /> : <Arrow28 />}</IconBox8>
    </TouchableOpacity>
  );
};
export const StarBtn = () => {
  return (
    <TouchableOpacity>
      <IconBox8>
        <StarBold />
      </IconBox8>
    </TouchableOpacity>
  );
};
export const MyBtn = () => {
  return (
    <TouchableOpacity>
      <IconBox8>
        <My />
      </IconBox8>
    </TouchableOpacity>
  );
};
export const EditBtn = () => {
  return (
    <TouchableOpacity>
      <IconBox8>
        <Edit />
      </IconBox8>
    </TouchableOpacity>
  );
};
export const SettingBtn = () => {
  return (
    <TouchableOpacity>
      <IconBox8>
        <Setting />
      </IconBox8>
    </TouchableOpacity>
  );
};
