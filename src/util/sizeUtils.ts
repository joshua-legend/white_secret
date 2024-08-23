import { sizes } from '@/styles/sizes';

// 제네릭 타입을 활용한 Mapped Types
export type SizeCategoryKey = keyof typeof sizes;
export type SizeKey<T extends SizeCategoryKey> = keyof (typeof sizes)[T];

// 예시: FontSizeKey, PaddingKey, MarginKey 등
export type FontSizeKey = SizeKey<'fontSize'>;
export type PaddingKey = SizeKey<'padding'>;
export type MarginKey = SizeKey<'margin'>;
export type GapKey = SizeKey<'gap'>;

// 크기 상태 맵퍼
export const sizeMapper = {
  sizeState: (size: FontSizeKey): FontSizeKey => size,
  paddingState: (padding: PaddingKey): PaddingKey => padding,
  marginState: (margin: MarginKey): MarginKey => margin,
};

// 크기 전략
const sizeStrategies = {
  fontSize: {
    small: sizes.fontSize.small,
    medium: sizes.fontSize.medium,
    large: sizes.fontSize.large,
    xlarge: sizes.fontSize.xlarge,
  },
  padding: {
    small: sizes.padding.small,
    medium: sizes.padding.medium,
    large: sizes.padding.large,
    xlarge: sizes.padding.xlarge,
  },
  margin: {
    small: sizes.margin.small,
    medium: sizes.margin.medium,
    large: sizes.margin.large,
    xlarge: sizes.margin.xlarge,
  },
  gap: {
    small: sizes.gap.small,
    medium: sizes.gap.medium,
  },
};

// 크기 결정 함수
export const determineFontSize = (size: FontSizeKey) => sizeStrategies.fontSize[size];
export const determinePaddingSize = (padding: PaddingKey) => sizeStrategies.padding[padding];
export const determineMarginSize = (margin: MarginKey) => sizeStrategies.margin[margin];
export const determineGapSize = (gap: GapKey) => sizeStrategies.gap[gap];
