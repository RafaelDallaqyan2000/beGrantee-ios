import React from 'react';
import ContentLoader, {Rect} from 'react-content-loader/native';

export const LoadingCompaniesScreen = (props: any) => (
  <ContentLoader
    speed={2}
    width={400}
    height={800}
    viewBox="0 0 400 800"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    {/*<Rect x="120" y="30" rx="6" ry="6" width="135" height="32" />*/}
    {/*<Rect x="36" y="38" rx="6" ry="6" width="16" height="16" />*/}
    <Rect x="32" y="88" rx="6" ry="6" width="34" height="34" />
    <Rect x="78" y="92" rx="6" ry="6" width="109" height="28" />
    <Rect x="63" y="139" rx="6" ry="6" width="145" height="18" />
    <Rect x="38" y="142" rx="6" ry="6" width="11" height="11" />
    <Rect x="37" y="174" rx="6" ry="6" width="11" height="11" />
    <Rect x="77" y="270" rx="6" ry="6" width="33" height="28" />
    <Rect x="62" y="349" rx="6" ry="6" width="100" height="18" />
    <Rect x="62" y="317" rx="6" ry="6" width="241" height="18" />
    <Rect x="63" y="203" rx="6" ry="6" width="80" height="18" />
    <Rect x="35" y="320" rx="6" ry="6" width="12" height="12" />
    <Rect x="63" y="171" rx="6" ry="6" width="113" height="18" />
    <Rect x="30" y="266" rx="6" ry="6" width="35" height="35" />
    <Rect x="36" y="352" rx="6" ry="6" width="11" height="11" />
    <Rect x="38" y="211" rx="6" ry="6" width="11" height="11" />
  </ContentLoader>
);
