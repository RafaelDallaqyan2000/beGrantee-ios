import { PopUp } from "../PopUp/PopUp";
import { OptionalUpdate, ForceUpdate } from "./";
import VersionCheck from 'react-native-version-check';
import { checkUpdateApp } from "../../services";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../App";
import { useSelector } from "react-redux";
import { Linking } from "react-native";


export function UpdateAppWindow() {

    const [showUpdateWindow, setShowUpdateWindow] = useState<boolean>(true);

    let {token}: any = useContext(AuthContext);
    const myAppVersion = VersionCheck.getCurrentVersion();

    const isNewVersion = useSelector((state: any) => state.reducer.isNewVersion);

    useEffect(() => {
        checkUpdateApp({token, myAppVersion})
    }, []);
    
    const handlePressUpdateBtn = () => {
        Linking.openURL('itms-apps://apps.apple.com/app/id6478381838')
    };
      
    return isNewVersion ? (
        <PopUp open={showUpdateWindow} showCloseBtn={false}>
            {isNewVersion.isForce ? (
                <ForceUpdate handlePressUpdate={handlePressUpdateBtn} />
            ) : (
                <OptionalUpdate
                    handlePressRemindMeLater={() => setShowUpdateWindow(false)}
                    handlePressUpdate={handlePressUpdateBtn}
                />
            )}
        </PopUp>
    ) : null
}