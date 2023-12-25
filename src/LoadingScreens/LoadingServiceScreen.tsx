import React from 'react';
import ContentLoader, {Circle, Rect} from 'react-content-loader/native';

export const LoadingServiceScreen = (props: any) => (
  <ContentLoader
    speed={1}
    width={500}
    height={824}
    viewBox="0 0 500 824"
    backgroundColor="#f1efef"
    foregroundColor="#e7e5e5"
    {...props}>
    <Circle cx="53" cy="53" r="23" />
    <Rect x="32" y="272" rx="6" ry="6" width="174" height="30" />
    <Rect x="497" y="298" rx="0" ry="0" width="32" height="2" />
    <Rect x="308" y="279" rx="6" ry="6" width="29" height="18" />
    <Rect x="34" y="330" rx="6" ry="6" width="47" height="18" />
    <Rect x="30" y="362" rx="6" ry="6" width="55" height="2" />
    <Rect x="113" y="330" rx="6" ry="6" width="47" height="18" />
    <Rect x="192" y="330" rx="6" ry="6" width="88" height="18" />
    <Rect x="109" y="362" rx="6" ry="6" width="55" height="2" />
    <Rect x="188" y="362" rx="6" ry="6" width="96" height="2" />
    <Rect x="35" y="378" rx="6" ry="6" width="40" height="20" />
    <Rect x="35" y="406" rx="6" ry="6" width="315" height="108" />
    <Rect x="35" y="528" rx="6" ry="6" width="88" height="20" />
    <Rect x="35" y="556" rx="6" ry="6" width="314" height="180" />
  </ContentLoader>
);
