import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    contatiner:{
        flex: 1,
        backgroundColor: "#7A4A9E",
        paddingHorizontal: 24,
        paddingTop : 60,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#FFFFFF",
        textAlign: "center",
        marginBottom: 32,
        marginTop: 20,
    },
    form: {
        flexDirection: "row",
        marginBottom: 32,
    },
    input: {
        flex: 1,
        height: 54,
        backgroundColor: "#F2F2F2",
        borderRadius: 6,
        paddingHorizontal: 16,
        fontSize: 16,
        marginRight: 4,
        color: "#000000",
    },
    button: {
        width: 54,
        height: 54,
        backgroundColor: "#1E6F9F",
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#FFFFFF",
    },
    info: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    infoItem: {
        flexDirection: "row",
        alignItems: "center",
    },
    infoTextGreen: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#4EA8DE",
        marginRight: 8,
    },
    infoTextPurple: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#8284FA",
        marginRight: 8,
    },
    infoCount: {
        backgroundColor: "#333333",
        color: "#FFFFFF",
        fontSize: 12,
        fontWeight: "bold",
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 10,
        minWidth: 20,
        textAlign: "center",
    },
    list: {
        flexGrow: 1,
    },
    emptyContainer: {
        alignItems: "center",
        paddingTop: 48,
        paddingHorizontal: 20,
    },
    emptyTitle: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#808080",
        textAlign: "center",
        lineHeight: 20,
    },
    emptySubtitle: {
        fontSize: 14,
        color: "#808080",
        textAlign: "center",
        marginTop: 4,
        lineHeight: 20,
    },
    
})