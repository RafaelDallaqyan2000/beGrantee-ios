import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

export const NewNotification = (props: any) => {
  const { inFocus } = props;

  return inFocus ? (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <Path
        fill="#3875F6"
        fillRule="evenodd"
        d="M13.794 3.295a5.586 5.586 0 0 0-7.346 4.674l-.252 2.267-.006.057a8 8 0 0 1-1.073 3.18l-.03.05-.578.963c-.525.874-.787 1.311-.73 1.67a1 1 0 0 0 .346.61c.278.234.788.234 1.807.234h12.136c1.02 0 1.53 0 1.808-.233a1 1 0 0 0 .346-.611c.056-.359-.206-.796-.73-1.67l-.579-.964-.03-.05a8.001 8.001 0 0 1-.96-2.473 5 5 0 0 1-4.129-7.704Zm2.48 1.694a2 2 0 0 0 1.276 2.96 5.567 5.567 0 0 0-1.276-2.96Z"
        clipRule="evenodd"
      />
      <Path fill="#3875F6" d="M9 17a3 3 0 0 0 6 0H9Z" />
      <Circle cx={18} cy={6} r={2.5} fill="#3875F6" stroke="#3875F6" />
    </Svg>
  ) : (
    <Svg  
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <Path
        fill="#363538"
        fillRule="evenodd"
        d="M14.456 2.474a6.586 6.586 0 0 0-9.001 5.385l-.253 2.266-.006.054a7 7 0 0 1-.939 2.782l-.028.047-.578.963-.024.04c-.241.403-.46.768-.606 1.077-.148.314-.306.74-.23 1.224a2 2 0 0 0 .692 1.222c.375.314.822.397 1.167.432.34.034.766.034 1.235.034h12.23c.47 0 .895 0 1.235-.034.346-.035.793-.118 1.168-.432a2 2 0 0 0 .691-1.222c.077-.483-.082-.91-.23-1.224-.145-.31-.364-.674-.606-1.077l-.024-.04-.578-.963-.028-.047a7.001 7.001 0 0 1-.815-2.047 5.024 5.024 0 0 1-2.045-.04 9 9 0 0 0 1.141 3.11l.032.053.578.963c.273.456.438.733.536.94l.015.032a2.33 2.33 0 0 1-.035.004c-.228.023-.55.024-1.082.024H5.932c-.531 0-.854-.001-1.081-.024a2.325 2.325 0 0 1-.035-.004c.004-.01.01-.02.014-.032.098-.207.263-.484.536-.94l.578-.963.032-.053a9 9 0 0 0 1.207-3.577l.007-.06.252-2.267a4.586 4.586 0 0 1 5.893-3.882 5.004 5.004 0 0 1 1.12-1.724Zm2.526 1.804a1.999 1.999 0 0 0-.937 2.145c.12.225.223.461.305.707a1.998 1.998 0 0 0 2.203.793l-.007-.064a6.565 6.565 0 0 0-1.564-3.581Z"
        clipRule="evenodd"
      />
      <Path
        stroke="#363538"
        strokeLinecap="round"
        strokeWidth={2}
        d="M9.102 17.665c.171.957.548 1.802 1.072 2.405.524.603 1.166.93 1.826.93.66 0 1.302-.327 1.826-.93s.9-1.448 1.072-2.405"
      />
      <Circle cx={18} cy={6} r={2.5} fill="#363538" stroke="#363538" />
    </Svg>
  )
}