import { theme } from '../../styleset/theme';
import styled from 'styled-components';

export const LoaderBox = styled.div`
  inline-size: 100vw;
  block-size: 100vh;
  position: absolute;
  top: 45%;
  left: 50%;
`;

export const Book = styled.div`
  color: ${theme.colors.active};
  animation-duration: 6.8s;
  width: 32px;
  height: 12px;
  position: relative;
  margin-top: 32px;
  zoom: 1.5;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    position: absolute;
    left: 50%;
    top: 0;
  }

  ul li {
    height: 4px;
    border-radius: 2px;
    transform-origin: 100% 2px;
    width: 48px;
    right: 0;
    top: -10px;
    position: absolute;
    background: ${theme.colors.active};
    transform: rotateZ(0deg) translateX(-18px);
    -webkit-animation-duration: 6.8s;
    animation-duration: 6.8s;
    -webkit-animation-timing-function: ease;
    animation-timing-function: ease;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  ul li:nth-child(0) {
    -webkit-animation-name: page0;
    animation-name: page0;
  }

  ul li:nth-child(1) {
    -webkit-animation-name: page1;
    animation-name: page1;
  }

  ul li:nth-child(2) {
    -webkit-animation-name: page2;
    animation-name: page2;
  }
  ul li:nth-child(3) {
    -webkit-animation-name: page3;
    animation-name: page3;
  }
  ul li:nth-child(4) {
    -webkit-animation-name: page4;
    animation-name: page4;
  }
  ul li:nth-child(5) {
    -webkit-animation-name: page5;
    animation-name: page5;
  }
  ul li:nth-child(6) {
    -webkit-animation-name: page6;
    animation-name: page6;
  }
  ul li:nth-child(7) {
    -webkit-animation-name: page7;
    animation-name: page7;
  }
  ul li:nth-child(8) {
    -webkit-animation-name: page8;
    animation-name: page8;
  }
  ul li:nth-child(9) {
    -webkit-animation-name: page9;
    animation-name: page9;
  }
  ul li:nth-child(10) {
    -webkit-animation-name: page10;
    animation-name: page10;
  }
  ul li:nth-child(11) {
    -webkit-animation-name: page11;
    animation-name: page11;
  }
  ul li:nth-child(12) {
    -webkit-animation-name: page12;
    animation-name: page12;
  }
  ul li:nth-child(13) {
    -webkit-animation-name: page13;
    animation-name: page13;
  }
  ul li:nth-child(14) {
    -webkit-animation-name: page14;
    animation-name: page14;
  }
  ul li:nth-child(15) {
    -webkit-animation-name: page15;
    animation-name: page15;
  }
  ul li:nth-child(16) {
    -webkit-animation-name: page16;
    animation-name: page16;
  }
  ul li:nth-child(17) {
    -webkit-animation-name: page17;
    animation-name: page17;
  }
  ul li:nth-child(18) {
    -webkit-animation-name: page18;
    animation-name: page18;
  }

  @-webkit-keyframes page0 {
    4% {
      transform: rotateZ(0deg) translateX(-18px);
    }
    13%,
    54% {
      transform: rotateZ(180deg) translateX(-18px);
    }
    63% {
      transform: rotateZ(0deg) translateX(-18px);
    }
  }

  @keyframes page0 {
    4% {
      transform: rotateZ(0deg) translateX(-18px);
    }
    13%,
    54% {
      transform: rotateZ(180deg) translateX(-18px);
    }
    63% {
      transform: rotateZ(0deg) translateX(-18px);
    }
  }
  @-webkit-keyframes page1 {
    5.86% {
      transform: rotateZ(0deg) translateX(-18px);
    }
    14.74%,
    55.86% {
      transform: rotateZ(180deg) translateX(-18px);
    }
    64.74% {
      transform: rotateZ(0deg) translateX(-18px);
    }
  }
  @keyframes page1 {
    5.86% {
      transform: rotateZ(0deg) translateX(-18px);
    }
    14.74%,
    55.86% {
      transform: rotateZ(180deg) translateX(-18px);
    }
    64.74% {
      transform: rotateZ(0deg) translateX(-18px);
    }
  }
  @-webkit-keyframes page2 {
    7.72% {
      transform: rotateZ(0deg) translateX(-18px);
    }
    16.48%,
    57.72% {
      transform: rotateZ(180deg) translateX(-18px);
    }
    66.48% {
      transform: rotateZ(0deg) translateX(-18px);
    }
  }
  @keyframes page2 {
    7.72% {
      transform: rotateZ(0deg) translateX(-18px);
    }
    16.48%,
    57.72% {
      transform: rotateZ(180deg) translateX(-18px);
    }
    66.48% {
      transform: rotateZ(0deg) translateX(-18px);
    }
  }
  @-webkit-keyframes page3 {
    9.58% {
      transform: rotateZ(0deg) translateX(-18px);
    }
    18.22%,
    59.58% {
      transform: rotateZ(180deg) translateX(-18px);
    }
    68.22% {
      transform: rotateZ(0deg) translateX(-18px);
    }
  }
  @keyframes page3 {
    9.58% {
      transform: rotateZ(0deg) translateX(-18px);
    }
    18.22%,
    59.58% {
      transform: rotateZ(180deg) translateX(-18px);
    }
    68.22% {
      transform: rotateZ(0deg) translateX(-18px);
    }
  }
  @-webkit-keyframes page4 {
    11.44% {
      transform: rotateZ(0deg) translateX(-18px);
    }
    19.96%,
    61.44% {
      transform: rotateZ(180deg) translateX(-18px);
    }
    69.96% {
      transform: rotateZ(0deg) translateX(-18px);
    }
  }
  @keyframes page4 {
    11.44% {
      transform: rotateZ(0deg) translateX(-18px);
    }
    19.96%,
    61.44% {
      transform: rotateZ(180deg) translateX(-18px);
    }
    69.96% {
      transform: rotateZ(0deg) translateX(-18px);
    }
  }
  @-webkit-keyframes page5 {
    13.3% {
      transform: rotateZ(0deg) translateX(-18px);
    }
    21.7%,
    63.3% {
      transform: rotateZ(180deg) translateX(-18px);
    }
    71.7% {
      transform: rotateZ(0deg) translateX(-18px);
    }
  }
  @keyframes page5 {
    13.3% {
      transform: rotateZ(0deg) translateX(-18px);
    }
    21.7%,
    63.3% {
      transform: rotateZ(180deg) translateX(-18px);
    }
    71.7% {
      transform: rotateZ(0deg) translateX(-18px);
    }
  }
  @-webkit-keyframes page6 {
    15.16% {
      transform: rotateZ(0deg) translateX(-18px);
    }
    23.44%,
    65.16% {
      transform: rotateZ(180deg) translateX(-18px);
    }
    73.44% {
      transform: rotateZ(0deg) translateX(-18px);
    }
  }
  @keyframes page6 {
    15.16% {
      transform: rotateZ(0deg) translateX(-18px);
    }
    23.44%,
    65.16% {
      transform: rotateZ(180deg) translateX(-18px);
    }
    73.44% {
      transform: rotateZ(0deg) translateX(-18px);
    }
  }
  @-webkit-keyframes page7 {
    17.02% {
      transform: rotateZ(0deg) translateX(-18px);
    }
    25.18%,
    67.02% {
      transform: rotateZ(180deg) translateX(-18px);
    }
    75.18% {
      transform: rotateZ(0deg) translateX(-18px);
    }
  }
  @keyframes page7 {
    17.02% {
      transform: rotateZ(0deg) translateX(-18px);
    }
    25.18%,
    67.02% {
      transform: rotateZ(180deg) translateX(-18px);
    }
    75.18% {
      transform: rotateZ(0deg) translateX(-18px);
    }
  }
  @-webkit-keyframes page8 {
    18.88% {
      transform: rotateZ(0deg) translateX(-18px);
    }
    26.92%,
    68.88% {
      transform: rotateZ(180deg) translateX(-18px);
    }
    76.92% {
      transform: rotateZ(0deg) translateX(-18px);
    }
  }
  @keyframes page8 {
    18.88% {
      transform: rotateZ(0deg) translateX(-18px);
    }
    26.92%,
    68.88% {
      transform: rotateZ(180deg) translateX(-18px);
    }
    76.92% {
      transform: rotateZ(0deg) translateX(-18px);
    }
  }
  @-webkit-keyframes page9 {
    20.74% {
      transform: rotateZ(0deg) translateX(-18px);
    }
    28.66%,
    70.74% {
      transform: rotateZ(180deg) translateX(-18px);
    }
    78.66% {
      transform: rotateZ(0deg) translateX(-18px);
    }
  }
  @keyframes page9 {
    20.74% {
      transform: rotateZ(0deg) translateX(-18px);
    }
    28.66%,
    70.74% {
      transform: rotateZ(180deg) translateX(-18px);
    }
    78.66% {
      transform: rotateZ(0deg) translateX(-18px);
    }
  }
  @-webkit-keyframes page10 {
    22.6% {
      transform: rotateZ(0deg) translateX(-18px);
    }
    30.4%,
    72.6% {
      transform: rotateZ(180deg) translateX(-18px);
    }
    80.4% {
      transform: rotateZ(0deg) translateX(-18px);
    }
  }
  @keyframes page10 {
    22.6% {
      transform: rotateZ(0deg) translateX(-18px);
    }
    30.4%,
    72.6% {
      transform: rotateZ(180deg) translateX(-18px);
    }
    80.4% {
      transform: rotateZ(0deg) translateX(-18px);
    }
  }
  @-webkit-keyframes page11 {
    24.46% {
      transform: rotateZ(0deg) translateX(-18px);
    }
    32.14%,
    74.46% {
      transform: rotateZ(180deg) translateX(-18px);
    }
    82.14% {
      transform: rotateZ(0deg) translateX(-18px);
    }
  }
  @keyframes page11 {
    24.46% {
      transform: rotateZ(0deg) translateX(-18px);
    }
    32.14%,
    74.46% {
      transform: rotateZ(180deg) translateX(-18px);
    }
    82.14% {
      transform: rotateZ(0deg) translateX(-18px);
    }
  }
  @-webkit-keyframes page12 {
    26.32% {
      transform: rotateZ(0deg) translateX(-18px);
    }
    33.88%,
    76.32% {
      transform: rotateZ(180deg) translateX(-18px);
    }
    83.88% {
      transform: rotateZ(0deg) translateX(-18px);
    }
  }
  @keyframes page12 {
    26.32% {
      transform: rotateZ(0deg) translateX(-18px);
    }
    33.88%,
    76.32% {
      transform: rotateZ(180deg) translateX(-18px);
    }
    83.88% {
      transform: rotateZ(0deg) translateX(-18px);
    }
  }
  @-webkit-keyframes page13 {
    28.18% {
      transform: rotateZ(0deg) translateX(-18px);
    }
    35.62%,
    78.18% {
      transform: rotateZ(180deg) translateX(-18px);
    }
    85.62% {
      transform: rotateZ(0deg) translateX(-18px);
    }
  }
  @keyframes page13 {
    28.18% {
      transform: rotateZ(0deg) translateX(-18px);
    }
    35.62%,
    78.18% {
      transform: rotateZ(180deg) translateX(-18px);
    }
    85.62% {
      transform: rotateZ(0deg) translateX(-18px);
    }
  }
  @-webkit-keyframes page14 {
    30.04% {
      transform: rotateZ(0deg) translateX(-18px);
    }
    37.36%,
    80.04% {
      transform: rotateZ(180deg) translateX(-18px);
    }
    87.36% {
      transform: rotateZ(0deg) translateX(-18px);
    }
  }
  @keyframes page14 {
    30.04% {
      transform: rotateZ(0deg) translateX(-18px);
    }
    37.36%,
    80.04% {
      transform: rotateZ(180deg) translateX(-18px);
    }
    87.36% {
      transform: rotateZ(0deg) translateX(-18px);
    }
  }
  @-webkit-keyframes page15 {
    31.9% {
      transform: rotateZ(0deg) translateX(-18px);
    }
    39.1%,
    81.9% {
      transform: rotateZ(180deg) translateX(-18px);
    }
    89.1% {
      transform: rotateZ(0deg) translateX(-18px);
    }
  }
  @keyframes page15 {
    31.9% {
      transform: rotateZ(0deg) translateX(-18px);
    }
    39.1%,
    81.9% {
      transform: rotateZ(180deg) translateX(-18px);
    }
    89.1% {
      transform: rotateZ(0deg) translateX(-18px);
    }
  }
  @-webkit-keyframes page16 {
    33.76% {
      transform: rotateZ(0deg) translateX(-18px);
    }
    40.84%,
    83.76% {
      transform: rotateZ(180deg) translateX(-18px);
    }
    90.84% {
      transform: rotateZ(0deg) translateX(-18px);
    }
  }
  @keyframes page16 {
    33.76% {
      transform: rotateZ(0deg) translateX(-18px);
    }
    40.84%,
    83.76% {
      transform: rotateZ(180deg) translateX(-18px);
    }
    90.84% {
      transform: rotateZ(0deg) translateX(-18px);
    }
  }
  @-webkit-keyframes page17 {
    35.62% {
      transform: rotateZ(0deg) translateX(-18px);
    }
    42.58%,
    85.62% {
      transform: rotateZ(180deg) translateX(-18px);
    }
    92.58% {
      transform: rotateZ(0deg) translateX(-18px);
    }
  }
  @keyframes page17 {
    35.62% {
      transform: rotateZ(0deg) translateX(-18px);
    }
    42.58%,
    85.62% {
      transform: rotateZ(180deg) translateX(-18px);
    }
    92.58% {
      transform: rotateZ(0deg) translateX(-18px);
    }
  }
  @-webkit-keyframes page18 {
    37.48% {
      transform: rotateZ(0deg) translateX(-18px);
    }
    44.32%,
    87.48% {
      transform: rotateZ(180deg) translateX(-18px);
    }
    94.32% {
      transform: rotateZ(0deg) translateX(-18px);
    }
  }
  @keyframes page18 {
    37.48% {
      transform: rotateZ(0deg) translateX(-18px);
    }
    44.32%,
    87.48% {
      transform: rotateZ(180deg) translateX(-18px);
    }
    94.32% {
      transform: rotateZ(0deg) translateX(-18px);
    }
  }
  @-webkit-keyframes left {
    4% {
      transform: rotateZ(90deg);
    }
    10%,
    40% {
      transform: rotateZ(0deg);
    }
    46%,
    54% {
      transform: rotateZ(90deg);
    }
    60%,
    90% {
      transform: rotateZ(0deg);
    }
    96% {
      transform: rotateZ(90deg);
    }
  }
  @keyframes left {
    4% {
      transform: rotateZ(90deg);
    }
    10%,
    40% {
      transform: rotateZ(0deg);
    }
    46%,
    54% {
      transform: rotateZ(90deg);
    }
    60%,
    90% {
      transform: rotateZ(0deg);
    }
    96% {
      transform: rotateZ(90deg);
    }
  }
  @-webkit-keyframes right {
    4% {
      transform: rotateZ(-90deg);
    }
    10%,
    40% {
      transform: rotateZ(0deg);
    }
    46%,
    54% {
      transform: rotateZ(-90deg);
    }
    60%,
    90% {
      transform: rotateZ(0deg);
    }
    96% {
      transform: rotateZ(-90deg);
    }
  }
  @keyframes right {
    4% {
      transform: rotateZ(-90deg);
    }
    10%,
    40% {
      transform: rotateZ(0deg);
    }
    46%,
    54% {
      transform: rotateZ(-90deg);
    }
    60%,
    90% {
      transform: rotateZ(0deg);
    }
    96% {
      transform: rotateZ(-90deg);
    }
  }
  @-webkit-keyframes book {
    4% {
      transform: rotateZ(-90deg);
    }
    10%,
    40% {
      transform: rotateZ(0deg);
      transform-origin: 2px 2px;
    }
    40.01%,
    59.99% {
      transform-origin: 30px 2px;
    }
    46%,
    54% {
      transform: rotateZ(90deg);
    }
    60%,
    90% {
      transform: rotateZ(0deg);
      transform-origin: 2px 2px;
    }
    96% {
      transform: rotateZ(-90deg);
    }
  }
  @keyframes book {
    4% {
      transform: rotateZ(-90deg);
    }
    10%,
    40% {
      transform: rotateZ(0deg);
      transform-origin: 2px 2px;
    }
    40.01%,
    59.99% {
      transform-origin: 30px 2px;
    }
    46%,
    54% {
      transform: rotateZ(90deg);
    }
    60%,
    90% {
      transform: rotateZ(0deg);
      transform-origin: 2px 2px;
    }
    96% {
      transform: rotateZ(-90deg);
    }
  }
`;

export const Inner = styled.div`
  width: 32px;
  height: 12px;
  position: relative;
  transform-origin: 2px 2px;
  transform: rotateZ(-90deg);
  -webkit-animation: book 6.8s ease infinite;
  animation: book 6.8s ease infinite;
`;

export const LeftPart = styled.div`
  width: 60px;
  height: 4px;
  top: 0;
  border-radius: 2px;
  background: ${theme.colors.active};
  position: absolute;
  &:before {
    content: '';
    width: 48px;
    height: 4px;
    border-radius: 2px;
    background: inherit;
    position: absolute;
    top: -10px;
    left: 6px;
  }
  right: 28px;
  transform-origin: 58px 2px;
  transform: rotateZ(90deg);
  -webkit-animation: left 6.8s ease infinite;
  animation: left 6.8s ease infinite;
`;

export const RightPart = styled.div`
  width: 60px;
  height: 4px;
  top: 0;
  border-radius: 2px;
  background: ${theme.colors.active};
  position: absolute;
  &:before {
    content: '';
    width: 48px;
    height: 4px;
    border-radius: 2px;
    background: inherit;
    position: absolute;
    top: -10px;
    left: 6px;
  }
  left: 28px;
  transform-origin: 2px 2px;
  transform: rotateZ(-90deg);
  -webkit-animation: right 6.8s ease infinite;
  animation: right 6.8s ease infinite;
`;

export const MiddlePart = styled.div`
  width: 32px;
  height: 12px;
  border: 4px solid ${theme.colors.active};
  border-top: 0;
  border-radius: 0 0 9px 9px;
  transform: translateY(2px);
`;
