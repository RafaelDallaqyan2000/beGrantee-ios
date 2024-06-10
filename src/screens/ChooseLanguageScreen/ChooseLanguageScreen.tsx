import { StyleSheet, Text } from "react-native";
import { View } from "react-native-animatable";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import AppButton from "../../components/AppButton/AppButton";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import globalStyles from "../../styles/globalStyles";
import LogoAnimation from "../AnimationLogoScreen/AnimationLogo";
import { useEffect, useState } from "react";
import { window } from "..";

export function ChooseLanguageScreen() {
    const {t, i18n} = useTranslation();
    const navigation = useNavigation();
    const [showAnimation, setShowAnimation] = useState(true);

    useEffect(() => {
        setTimeout(() => setShowAnimation(false), 6000);
      }, []);

    const handlePressBtn = () => {
        navigation.navigate("PhoneNumber" as never)
    };


    if (showAnimation) {
        return (
          <TouchableOpacity
            style={{height: window.height}}
            onPress={() => setShowAnimation(false)}>
            <LogoAnimation />
          </TouchableOpacity>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.languageContainer}>
                <Text style={styles.title}>{t('Choose the language')}</Text>
                <TouchableOpacity
                    style={styles.language} 
                    onPress={() => i18n.changeLanguage('en')}
                >
                    <Text
                     style={{color: i18n.language === 'en' ? '#3875F6': '#000'}}>
                        English
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.language} 
                    onPress={() => i18n.changeLanguage('hy')}
                >
                    <Text
                     style={{color: i18n.language === 'hy' ? '#3875F6': '#000'}}
                    >
                        Հայերեն
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.language} 
                    onPress={() => i18n.changeLanguage('ru')}
                >
                    <Text
                     style={{color: i18n.language === 'ru' ? '#3875F6': '#000'}}
                    >
                        Русский
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footerContainer}>
                <AppButton
                    title={t('Continue')}
                    textStyle={[globalStyles.btnText, styles.btnText]}
                    onPress={handlePressBtn}
                    style={[globalStyles.button, styles.btnContainer]}
                />
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },

    title: {
        textAlign: 'center',
        fontSize: 24, 
        fontWeight: '600',
        marginTop: 20,
        marginBottom: 2,
        letterSpacing: 2,
        color: '#000000CC'
    },

    language: {
        // backgroundColor: "orange",
        marginTop: 18,
        paddingVertical: 10,
        paddingHorizontal: 30,
    },

    languageContainer: {
        // backgroundColor: 'green',
    },

    btnText: {
        color: '#FFF',
    },
    btnContainer: {
        backgroundColor: '#3875F6',
        borderColor: '#F5F5F5'
    },
    footerContainer: {
        alignItems: 'center'
    }
})