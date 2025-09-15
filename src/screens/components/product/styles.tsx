import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container:{
        width: '90%',
        backgroundColor: "#FFF",
        flexDirection:'row',
        alignItems:"center",
        marginBottom:8,
        textAlign: "left",
        justifyContent:"space-between",
        padding:12,
        borderColor:"#808080",
        borderWidth:1,
        borderRadius:8,
        marginHorizontal:20,

    },
    buttonTrash:{
        padding:12,
        justifyContent:"center",
    },
    checkedText: {
        textDecorationLine: 'line-through', 
    },
    name:{
        flex:1,
        marginLeft:12
    }
  
})