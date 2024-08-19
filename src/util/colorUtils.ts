import { colors } from '@/styles/colors';

export type TextColorKey = keyof typeof colors.text;
export type TextColorValue = (typeof colors.text)[keyof typeof colors.text];

export const stateMapper = {
  activeState: (isActive: boolean): 'active' | 'inactive' => (isActive ? 'active' : 'inactive'),
  hoverState: (isHovered: boolean): 'hovered' | 'notHovered' => (isHovered ? 'hovered' : 'notHovered'),
  disabledState: (isDisabled: boolean): 'disabled' | 'enabled' => (isDisabled ? 'disabled' : 'enabled'),
  focusState: (isFocused: boolean): 'focused' | 'unfocused' => (isFocused ? 'focused' : 'unfocused'),
  currentState: (isCurrent: boolean): 'current' | 'notCurrent' => (isCurrent ? 'current' : 'notCurrent'),
};

const colorStrategies = {
  active: colors.text.active,
  inactive: colors.text.inActive,
  current: colors.text.current,
  notCurrent: colors.text.notCurrent,
};

export const determineActiveColor = (state: 'active' | 'inactive'): TextColorValue => colorStrategies[state];
export const determineCurruentColor = (state: 'current' | 'notCurrent'): TextColorValue => colorStrategies[state];
