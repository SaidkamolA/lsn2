import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
export default function App() {
  const handleBuy = (productName) => {
    Alert.alert(`${productName} добавлен в корзину!`);
  };
  const products = [
    {
      id: 1,
      name: 'Iphone 15',
      description: 'Описание продукта 15',
      imageUrl: 'https://brostore.uz/cdn/shop/files/1_0e651548-671a-443e-8ec5-db30e0cc11c0_345x_crop_center.png?v=1698328836',
    },
    {
      id: 2,
      name: 'Samsung S24',
      description: 'Описание продукта 2',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ8GZnwLm2yAglvDfOXBi7mxpoBfUJSdvu_Z8KBgwW1_-exa32zy1x2B1VOz1RA7UoJWjDefTj3bFe7AO-NffI74lExYgb9PkIrwWPf6uhGnaotj9v7qy4njBe_zRFDFfMylSV5_alGx5k&usqp=CAc',
    },
    {
      id: 3,
      name: 'Expo go',
      description: 'Описание продукта 3',
      imageUrl: 'data:image/png;base64,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',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Информация о продуктах</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {products.map((product) => (
          <View key={product.id} style={styles.productInfo}>
            <Image source={{ uri: product.imageUrl }} style={styles.productImage} />
            <Text style={styles.productName}>
              {product.name}
            </Text>
            <Text style={styles.productDescription}>{product.description}</Text>
            <TouchableOpacity
              style={styles.buyButton}
              onPress={() => handleBuy(product.name)}
            >
              <Text style={styles.buyButtonText}>Купить</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  productInfo: {
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 20,
  },
  productImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  productName: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 10,
    textAlign: 'center',
  },
  productDescription: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  buyButton: {
    backgroundColor: '#4CAF50',
    width: '80%',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
