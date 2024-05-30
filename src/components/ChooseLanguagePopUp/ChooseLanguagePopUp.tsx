import { View } from "react-native-animatable";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet, Text } from "react-native";
import { PopUp } from "..";
import { useDispatch, useSelector } from "react-redux";
import { handleChange } from "../../store";
import { useTranslation } from "react-i18next";

type ChooseLanguageType = {
    handleSelectLanguage: (language: string) => any;
    closePopUp: () => any;
    openPopUp: boolean;
}

export function ChooseLanguagePopUp({
    handleSelectLanguage,
    closePopUp,
    openPopUp,
}: ChooseLanguageType) {

    const selectedLanguage = useSelector((state: any) => state.reducer.selectedLanguage)
    const dispatch = useDispatch();
    const {i18n} = useTranslation();

    const handlePressLanguage:any = (language:string) => {
        handleSelectLanguage(language);
        dispatch(handleChange('selectedLanguage', language));
        i18n.changeLanguage(language);
        closePopUp();
    };

    return (
        <PopUp 
        close={closePopUp}
        open={openPopUp} 
        closeStyle={{top: 26, right: 20}}
        containerStyle={{
          backgroundColor: '#FFF',
          shadowColor: '#FFF'
        }}>
            <View style={styles.languagesContainer}>

            <TouchableOpacity
                style={styles.pressableContainerStyle} 
                onPress={() => handlePressLanguage('en')}
            >
                <Text style={[
                    styles.text,
                     {color: selectedLanguage === 'en' ? '#3875F6' : '#333333'}
                ]}>
                    English(US)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.pressableContainerStyle} 
                onPress={() => handlePressLanguage('hy')}
            >
                <Text style={[
                    styles.text,
                     {color: selectedLanguage === 'hy' ? '#3875F6' : '#333333'}
                ]}>
                    Հայերեն
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.pressableContainerStyle} 
                onPress={() => handlePressLanguage('ru')}
            >
                <Text style={[
                    styles.text,
                     {color: selectedLanguage === 'ru' ? '#3875F6' : '#333333'}
                ]}>
                    Русский
                </Text>
            </TouchableOpacity>
            </View>
        </PopUp>
    )
}


const styles = StyleSheet.create({
    languagesContainer: {
        marginTop: 22
    },
    text: {
        color: '#333333',
        fontSize: 14,
        fontWeight: '400',
        paddingVertical: 10,
    },
    pressableContainerStyle: {
        marginBottom: 8
    },
})