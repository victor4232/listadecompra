import { useState } from "react";
import { styles } from "./styles";
import { Product } from "../components/product";
import { Alert, View, Text, TextInput, TouchableOpacity, Image, FlatList } from "react-native";


//PROFESSOR MEU COMMITS EM CASA ESTAVA DANDO TUDO ERRADO, NÃO SEI OQ FIZ TANTO QUE CRIOU OUTRA branches NO REPOSITORIO 
// aI SO VOLTEI ALGUMAS SALVAS E VIM IMPORTANDO NO PC DA CESUL

export interface ProductType {
    name: string;
    done: boolean;
}
export function Home() {
    const [products, setProducts] = useState<ProductType[]>([])
    const [productName, setProductName] = useState("");

    function handleAddProduct() {
        if (products.includes(productName)) {
            return Alert.alert("Produto inválido", "Digite o nome do produto.");
        }

        if (products.some(product => product.name.toLowerCase() === productName.toLowerCase())) {
            return Alert.alert("Produto já cadastrado", "Já existe um produto na lista com esse nome.");
        }

        setProducts([...products, { name: productName, done: false }]);
        setProductName("");
    }

    function handleProductRemove(name: string) {
        Alert.alert("Remover", `Deseja remover o produto ${name}?`, [
            {
                text: "Sim",
                onPress: () =>
                    setProducts(products.filter(product => product.name !== name)),
            },
            {
                text: "Não",
                style: "cancel",
            },
        ]);
    }

    function handleToggleDone(name: string) {
        setProducts(products.map(product =>
            product.name === name
                ? { ...product, done: !product.done }
                : product
        ));
    }

    const totalProducts = products.length;
    const finalized = products.filter(p => p.done).length;

    return (

        <View style={styles.containerWhite}>
            <View style={styles.container}>
                <Text style={styles.title}>Lista de Compras</Text>
            </View>


            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicione um novo produto"
                    keyboardType="default"
                    onChangeText={setProductName}
                    value={productName}

                />

                <TouchableOpacity style={styles.button} onPress={handleAddProduct}>
                    <Image source={require("../../../assets/images/plus.png")} />
                </TouchableOpacity>
            </View>
            <View style={styles.info}>
                <View style={styles.infoItem}>
                    <Text style={styles.infoTextGreen}>Produtos</Text>
                    <View style={styles.infoCount}>
                        <Text>{totalProducts}</Text>
                    </View>
                </View>

                <View style={styles.infoItem}>
                    <Text style={styles.infoTextPurple}>Finalizados</Text>
                    <View style={styles.infoCount}>
                        <Text>{finalized}</Text>
                    </View>
                </View>
            </View>
            <FlatList
                data={products}
                keyExtractor={(item) => item.name}
                contentContainerStyle={styles.list}
                renderItem={({ item }) =>
                    <Product
                        name={item.name}
                        done={item.done}
                        onRemove={() => handleProductRemove(item.name)}
                        onToggleDone={() => handleToggleDone(item.name)}
                    />}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <View style={styles.emptyContainer}>
                        <Image source={require("../../../assets/images/shopping_list.png")} />
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