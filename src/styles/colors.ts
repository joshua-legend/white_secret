export const colors = {
  // 배경 색상 (Background colors)
  background: {
    lightGray: '#F4F7FA', // 페이지 기본 배경 색상
    darkBlueGray: '#3F4D67', // 사이드바 배경 색상
  },

  // 텍스트 색상 (Text colors)
  text: {
    primary: '#888888', // 주요 텍스트 색상
    secondary: '#E8E3D2', // 부가적인 텍스트 색상
    link: '#1dc4e9', // 링크 텍스트 색상
    heading: '#888888', // 제목 텍스트 색상
    muted: '#9FB3D0', // 비활성화된 텍스트 색상
    active: '#1dc4e9', // 활성화된 텍스트 색상
    inActive: '#9FB3D0', // 비활성화된 텍스트 색상
    hovered: '#1dc4e9', // 호버된 텍스트 색상
    notHovered: '#9FB3D0', // 호버되지 않은 텍스트 색상
    disabled: '#9FB3D0', // 비활성화된 텍스트 색상
    enabled: '#1dc4e9', // 활성화된 텍스트 색상
    focused: '#1dc4e9', // 포커스된 텍스트 색상
    unFocused: '#9FB3D0', // 포커스되지 않은 텍스트 색상
    current: '#1dc4e9', // 현재 페이지 텍스트 색상
    notCurrent: '#9FB3D0', // 현재 페이지가 아닌 텍스트 색상
  },

  // 경계선 색상 (Border colors)
  border: {
    lightGrayBorder: '#E5E7EB', // 기본 경계선 색상
  },

  // 그림자 색상 (Shadow colors)
  shadow: {
    noShadow: 'none', // 그림자 없음
  },

  // 아이콘 색상 (Icon colors)
  icon: {
    muted: '#9FB3D0', // 비활성화된 아이콘 색상
    active: '#1dc4e9', // 활성화된 아이콘 색상
  },
} as const;
