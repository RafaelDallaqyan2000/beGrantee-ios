import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { UpdateWindowImage } from "../../../images/UpdateWindowImage";
import { window } from "../../../screens";

type ForceUpdateType = {
    handlePressUpdate: () => void;
}

export function ForceUpdate({handlePressUpdate}: ForceUpdateType) {

    return (
        <View style={styles.container}>
            <View>
                <UpdateWindowImage />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>New update is ready</Text>
                <Text>We've just released a new update. In order to proceed further please update the app now.</Text>
            </View>
            <View>
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
    updateButtonContainer: {
        backgroundColor: '#3875F6',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        width: window.width - 60,
        borderRadius: 8
    },
    updateButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '400',
    }
})