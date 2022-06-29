/* eslint-disable react/prop-types */
import React from 'react';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';
import { GlobalStyle } from '../../constants/GlobalStyle';

function Report({ props, fillColor }) {
  return (
    <Svg
      width={GlobalStyle.height * 0.03}
      height={GlobalStyle.height * 0.03}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#prefix__clip0)" fill={fillColor}>
        <Path d="M13.656 12.469h-3.563a.594.594 0 010-1.188h3.563a.594.594 0 010 1.188z" />
        <Path d="M13.656 12.469h-3.563a.594.594 0 010-1.188h3.563a.594.594 0 010 1.188z" />
        <Path d="M11.875 14.25a.594.594 0 01-.594-.594v-3.562a.594.594 0 011.187 0v3.562a.594.594 0 01-.593.594z" />
        <Path d="M5.74 15.834H2.176c-1.2 0-2.177-.976-2.177-2.177V2.18C0 .978.976 0 2.177 0h11.677c1.2 0 2.177.977 2.177 2.178V5.74a.594.594 0 01-1.188 0V2.179a.991.991 0 00-.99-.99H2.178a.991.991 0 00-.99.99v11.478c0 .546.445.99.99.99H5.74a.594.594 0 010 1.187z" />
        <Path d="M11.875 16.625c-2.62 0-4.75-2.13-4.75-4.75s2.13-4.75 4.75-4.75 4.75 2.13 4.75 4.75-2.13 4.75-4.75 4.75zm0-8.312a3.567 3.567 0 00-3.563 3.562 3.567 3.567 0 003.563 3.563 3.567 3.567 0 003.562-3.563 3.567 3.567 0 00-3.562-3.562z" />
        <Path d="M18.406 19a.59.59 0 01-.42-.174l-3.594-3.594a.594.594 0 01.84-.84l3.594 3.594a.594.594 0 01-.42 1.014z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill={fillColor} d="M0 0h19v19H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

function Home({ props, fillColor }) {
  return (
    <Svg
      width={GlobalStyle.height * 0.03}
      height={GlobalStyle.height * 0.03}
      viewBox="0 1 511 511.999"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M498.7 222.695c-.016-.011-.028-.027-.04-.039L289.805 13.81C280.902 4.902 269.066 0 256.477 0c-12.59 0-24.426 4.902-33.332 13.809L14.398 222.55c-.07.07-.144.144-.21.215-18.282 18.386-18.25 48.218.09 66.558 8.378 8.383 19.44 13.235 31.273 13.746.484.047.969.07 1.457.07h8.32v153.696c0 30.418 24.75 55.164 55.168 55.164h81.711c8.285 0 15-6.719 15-15V376.5c0-13.879 11.293-25.168 25.172-25.168h48.195c13.88 0 25.168 11.29 25.168 25.168V497c0 8.281 6.715 15 15 15h81.711c30.422 0 55.168-24.746 55.168-55.164V303.14h7.719c12.586 0 24.422-4.903 33.332-13.813 18.36-18.367 18.367-48.254.027-66.633zm-21.243 45.422a17.03 17.03 0 01-12.117 5.024H442.62c-8.285 0-15 6.714-15 15v168.695c0 13.875-11.289 25.164-25.168 25.164h-66.71V376.5c0-30.418-24.747-55.168-55.169-55.168H232.38c-30.422 0-55.172 24.75-55.172 55.168V482h-66.71c-13.876 0-25.169-11.29-25.169-25.164V288.14c0-8.286-6.715-15-15-15H48a13.9 13.9 0 00-.703-.032c-4.469-.078-8.66-1.851-11.8-4.996-6.68-6.68-6.68-17.55 0-24.234.003 0 .003-.004.007-.008l.012-.012L244.363 35.02A17.003 17.003 0 01256.477 30c4.574 0 8.875 1.781 12.113 5.02l208.8 208.796.098.094c6.645 6.692 6.633 17.54-.031 24.207zm0 0"
        fill={fillColor}
      />
    </Svg>
  );
}
const TabIcons = ({ iconName, props, fillColor }) => {
  if (iconName === 'report') {
    return <Report props={props} fillColor={fillColor} />;
  } if (iconName === 'home') {
    return <Home props={props} fillColor={fillColor} />;
  }
  return null;
};

export default TabIcons;
