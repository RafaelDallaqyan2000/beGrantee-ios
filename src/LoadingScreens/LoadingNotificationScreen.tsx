import React from 'react';
import ContentLoader, {Rect} from 'react-content-loader/native';
import {window} from "../screens";

export const LoadingNotificationScreen = (props: any) => (
  <ContentLoader
    speed={2}
    width={500}
    height={812}
    viewBox="0 0 500 812"
    backgroundColor="#f1efef"
    foregroundColor="#e7e5e5"
    {...props}>
    <Rect x="497" y="298" rx="0" ry="0" width="32" height="2" />
    <Rect
      x={`${(window.width - 145) / 2}`}
      y="30"
      rx="6"
      ry="6"
      width="145"
      height="32"
    />
    <Rect x="30" y="122" rx="6" ry="6" width="24" height="23" />
    <Rect x="30" y="196" rx="6" ry="6" width="110" height="18" />
    <Rect
      x="66"
      y="104"
      rx="6"
      ry="6"
      width={`${window.width - 160}`}
      height="22"
    />
    <Rect
      x="66"
      y="127"
      rx="6"
      ry="6"
      width={`${window.width - 130}`}
      height="36"
    />
    <Rect x="30" y="231" rx="6" ry="6" width="24" height="23" />
    <Rect x="30" y="78" rx="6" ry="6" width="118" height="18" />
    <Rect
      x="66"
      y="222"
      rx="6"
      ry="6"
      width={`${window.width - 160}`}
      height="22"
    />
    <Rect
      x="66"
      y="246"
      rx="6"
      ry="6"
      width={`${window.width - 130}`}
      height="18"
    />
    <Rect
      x="66"
      y="340"
      rx="6"
      ry="6"
      width={`${window.width - 160}`}
      height="22"
    />
    <Rect x="30" y="314" rx="6" ry="6" width="110" height="18" />
    <Rect
      x="66"
      y="364"
      rx="6"
      ry="6"
      width={`${window.width - 130}`}
      height="18"
    />
    <Rect
      x="66"
      y="487"
      rx="6"
      ry="6"
      width={`${window.width - 130}`}
      height="36"
    />
    <Rect x="30" y="437" rx="6" ry="6" width="110" height="18" />
    <Rect
      x="66"
      y="463"
      rx="6"
      ry="6"
      width={`${window.width - 160}`}
      height="22"
    />
    <Rect
      x={`${window.width - 30}`}
      y="222"
      rx="6"
      ry="6"
      width="10"
      height="10"
    />
    <Rect x="30" y="349" rx="6" ry="6" width="24" height="23" />
    <Rect
      x={`${window.width - 30}`}
      y="104"
      rx="6"
      ry="6"
      width="10"
      height="10"
    />
    <Rect x="30" y="481" rx="6" ry="6" width="24" height="23" />
    <Rect x="30" y="555" rx="6" ry="6" width="110" height="18" />
    <Rect
      x="66"
      y="605"
      rx="6"
      ry="6"
      width={`${window.width - 130}`}
      height="36"
    />
    <Rect
      x="66"
      y="699"
      rx="6"
      ry="6"
      width={`${window.width - 160}`}
      height="22"
    />
    <Rect x="30" y="715" rx="6" ry="6" width="24" height="23" />
    <Rect
      x="66"
      y="723"
      rx="6"
      ry="6"
      width={`${window.width - 130}`}
      height="36"
    />
    <Rect x="30" y="673" rx="6" ry="6" width="110" height="18" />
    <Rect
      x="66"
      y="581"
      rx="6"
      ry="6"
      width={`${window.width - 160}`}
      height="22"
    />
    <Rect x="30" y="599" rx="6" ry="6" width="24" height="23" />
  </ContentLoader>
);
