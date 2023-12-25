import React from 'react';
import ContentLoader, {Rect} from 'react-content-loader/native';

export const LoadingProfileScreen = (props: any) => (
  <ContentLoader
    speed={2}
    width={500}
    height={812}
    viewBox="0 0 500 812"
    backgroundColor="#f1efef"
    foregroundColor="#e7e5e5"
    {...props}>
    <Rect x="497" y="298" rx="0" ry="0" width="32" height="2" />
    <Rect x="126" y="29" rx="6" ry="6" width="123" height="32" />
    <Rect x="31" y="228" rx="6" ry="6" width="17" height="16" />
    <Rect x="118" y="171" rx="6" ry="6" width="142" height="18" />
    <Rect x="30" y="275" rx="6" ry="6" width="18" height="16" />
    <Rect x="340" y="231" rx="6" ry="6" width="4" height="9" />
    <Rect x="58" y="448" rx="6" ry="6" width="59" height="20" />
    <Rect x="58" y="226" rx="6" ry="6" width="86" height="20" />
    <Rect x="150" y="82" rx="40" ry="40" width="80" height="80" />
    <Rect x="30" y="450" rx="6" ry="6" width="17" height="16" />
    <Rect x="206" y="152" rx="6" ry="6" width="9" height="8" />
    <Rect x="31" y="323" rx="6" ry="6" width="17" height="16" />
    <Rect x="340" y="279" rx="6" ry="6" width="4" height="9" />
    <Rect x="340" y="322" rx="6" ry="6" width="4" height="9" />
    <Rect x="30" y="275" rx="6" ry="6" width="17" height="16" />
    <Rect x="58" y="322" rx="6" ry="6" width="104" height="20" />
    <Rect x="58" y="274" rx="6" ry="6" width="72" height="20" />
  </ContentLoader>
);
