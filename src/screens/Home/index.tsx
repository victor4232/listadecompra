import { useState } from "react";
import { styles } from "./styles";
import { Alert, View, Text, TextInput, TouchableOpacity, Image, FlatList } from "react-native";

export interface ProductType {

}
export function Home() {
    const [products, SetProducts] = useState<ProductType[]>([])
    const [productName, setProductName] = useState("");

    function handleAddProduct() {
        if (products.includes(productName)) {
            return Alert.alert("Produto inválido", "Digite o nome do produto.");
        }

    }

    return (

        <View style={styles.containerWhite}>
            <View style={styles.container}>
                <Text style={styles.title}>Lista de Compras</Text>
            </View>


            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicione um novo produto"
                    value={productName}
                    onChangeText={setProductName}
                    keyboardType="default"
                    onSubmitEditing={handleAddProduct}
                />

                <TouchableOpacity style={styles.button} onPress={handleAddProduct}>
                    <Image source={require("../../../assets/imagens/plus (1).png")} />
                </TouchableOpacity>
            </View>
            <View style={styles.info}>
                <View style={styles.infoItem}>
                    <Text style={styles.infoTextGreen}>Produtos</Text>
                    <Text style={styles.infoCount}>0</Text>
                </View>

                <View style={styles.infoItem}>
                    <Text style={styles.infoTextPurple}>Finalizados</Text>
                    <Text style={styles.infoCount}>0</Text>
                </View>
            </View>
            <FlatList
                data={products}
                keyExtractor={item => item}
                contentContainerStyle={styles.list}
                // renderItem={({ item }) => <Product name={item} onRemove={() => handleProductRemove(item)} />}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <View style={styles.emptyContainer}>
                        <Image source={require("../../../assets/imagens/shopping_list.png")}/>
                        <Text style={styles.emptyTitle}>
                            Você ainda não tem produtos na lista de compra
                        </Text>
                        <Text style={styles.emptySubtitle}>
                            Adicione produtos e organize sua lista de compras
                        </Text>
                    </View>
                )}
            />

        </View>
    );
}