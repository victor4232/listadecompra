import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container:{
        backgroundColor: "#7A4A9E",
        alignItems: "center",
        justifyContent:"center",
        width:"100%",
        height: 173,
        padding: 24,
    },
    containerWhite:{
        flex: 1,
        backgroundColor: "#FFFF"
    },
    title: {
        fontSize: 18,
        color: "#FFFFFF",
        
    },
    form: {
        flexDirection: "row",
        marginBottom: 33,
        top: -50,
        width: "100%",
        padding:18
    },
    input: {
        flex: 1,
        height: 60,
        backgroundColor: "#F2F2F2",
        color: "#808080",
        borderRadius: 6,
        borderWidth: 1,
        padding: 16,
        
    },
    button: {
        width: 60,
        height: 60,
        backgroundColor: "#31C667",
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 5,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#FFFFFF",
    },
    info: {

        flexDirection: "row",
        justifyContent: "space-between",
        margin: 24,
        marginTop: -50,
        borderBottomWidth: 1,
        borderBottomColor: "#D9D9D9"
    },
    infoItem: {
        padding: 10,
        flexDirection: "row",
        gap: 8,
    },
    infoTextGreen: {
        fontSize: 14,
        fontWeight: 700,
        color: "#31C667",
    },
    infoTextPurple: {
        fontSize: 14,
        fontWeight: 700,
        color: "#8284FA",
        
    },
    infoCount: {
        backgroundColor: "#D9D9D9",
        color: "#333",
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
        fontWeight: 700,
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