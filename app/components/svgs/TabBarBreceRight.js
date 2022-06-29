import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { GlobalStyle } from '../../constants/GlobalStyle';

function TabBarBraceRight(props) {
  return (
    <Svg
      width={GlobalStyle.width * 0.1733}
      height={GlobalStyle.height * 0.092}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M0 1c33.764 0 64 38.042 64 80" stroke={GlobalStyle.color.braceGrey} />
    </Svg>
  );
}

export default TabBarBraceRight;
