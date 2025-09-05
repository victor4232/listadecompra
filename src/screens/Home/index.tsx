import { useState } from "react";
import { styles } from "./styles";
import { Alert } from "react-native";


export function Home(){
    const [products, SetProducts] = useState<ProductType[]>([])
    const [productName, setProductName] = useState("");

    function handleAddProduct(){
        if(products.includes(productName)){
            return Alert.alert("Produto inválido", "Digite o nome do produto.");
        }
        
    }
}