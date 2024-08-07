import createRowOrColumn from 'components/containers/createRowOrColumn.tsx';
import createBox from 'components/containers/createBox.tsx';

export const RowSpacebetween = createRowOrColumn({
  flexDirection: 'row',
  gap: 0,
  justifyContent: 'space-between',
});
export const Row0 = createRowOrColumn({ flexDirection: 'row', gap: 0 });
export const Row5 = createRowOrColumn({ flexDirection: 'row', gap: 5 });
export const Row8 = createRowOrColumn({ flexDirection: 'row', gap: 8 });
export const Row12 = createRowOrColumn({ flexDirection: 'row', gap: 12 });

export const Col0 = createRowOrColumn({ flexDirection: 'column', gap: 0 });
export const Col8 = createRowOrColumn({ flexDirection: 'column', gap: 8 });
export const Col10 = createRowOrColumn({ flexDirection: 'column', gap: 10 });
export const Col12 = createRowOrColumn({ flexDirection: 'column', gap: 12 });
export const Col20 = createRowOrColumn({ flexDirection: 'column', gap: 20 });
export const Col40 = createRowOrColumn({ flexDirection: 'column', gap: 40 });

export const IconBox18 = createBox({
  paddingHorizontal: 18,
  paddingVertical: 18,
  borderRadius: 100,
});
export const IconBox14 = createBox({
  paddingHorizontal: 14,
  paddingVertical: 14,
  borderRadius: 100,
});
export const IconBox8 = createBox({
  paddingHorizontal: 8,
  paddingVertical: 8,
  borderRadius: 100,
});

export const SearchBoxGray = createBox({
  paddingHorizontal: 1,
  paddingVertical: 1,
  borderRadius: 100,
  backgroundColor: 'gray',
  flex: 1,
  flexDirection: 'row',
  gap: 12,
});
export const SearchBoxWhite = createBox({
  paddingHorizontal: 14,
  paddingVertical: 14,
  borderRadius: 100,
  backgroundColor: 'white',
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  gap: 10,
});

export const BoxBtnPrimaryContainer = createBox({
  paddingHorizontal: 12,
  paddingVertical: 18,
  borderRadius: 12,
  backgroundColor: 'white',
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  style: {
    position: 'relative',
  },
});
export const BoxBtnGenericContainer = createBox({
  paddingHorizontal: 12,
  paddingVertical: 18,
  borderRadius: 12,
  backgroundColor: 'white',
  flex: 1,
  gap: 8,
});
