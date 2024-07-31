import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { UpdateWindowImage } from "../../../images/UpdateWindowImage";
import { window } from "../../../screens";

type OptionalUpdateType = {
    handlePressUpdate: () => void;
    handlePressRemindMeLater: () => void;
}

export function OptionalUpdate({handlePressUpdate, handlePressRemindMeLater}: OptionalUpdateType) {
    return (
        <View style={styles.container}>
            <View>
                <UpdateWindowImage />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>New update is ready</Text>
                <Text>We've released a new update for our app. We really hope you'll install it as soon as possible.</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={handlePressRemindMeLater} style={styles.remindMeBtnContainer}>
                    <Text style={styles.remindMeBtnTxt}>Remind me later</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePressUpdate} style={styles.updateButtonContainer}>
                    <Text style={styles.updateButtonText}>Update now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    textContainer: {
        marginVertical: 24,
        alignItems: 'center',
        gap: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
    },
    description: {
        fontSize: 14,
        fontWeight: '400',
    },
    buttonsContainer: {
        flexDirection: 'row',
        gap: 24
    },
    updateButtonContainer: {
        backgroundColor: '#3875F6',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        width: (window.width - 84) / 2,
        borderRadius: 8
    },
    updateButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '400',
    },
    remindMeBtnContainer: {
        backgroundColor: '#fff',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        width: (window.width - 84) / 2,
        borderRadius: 8,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#D0D5DD'
    },
    remindMeBtnTxt: {
        fontSize: 14,
        fontWeight: '400',
        color: '#344054'
    }
})