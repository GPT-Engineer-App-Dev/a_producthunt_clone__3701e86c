import React, { useState } from "react";
import { Box, Heading, Text, Image, VStack, HStack, Divider, Button, Input, IconButton, useToast } from "@chakra-ui/react";
import { FaArrowUp, FaPlus } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "This is a sample product.",
    upvotes: 10,
    image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwMXxlbnwwfHx8fDE3MTM0NTk2Mjl8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is another sample product.",
    upvotes: 15,
    image: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwMnxlbnwwfHx8fDE3MTM0NTk2Mjl8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const [productList, setProductList] = useState(products);
  const [newProduct, setNewProduct] = useState("");
  const toast = useToast();

  const handleUpvote = (id) => {
    setProductList(productList.map((product) => (product.id === id ? { ...product, upvotes: product.upvotes + 1 } : product)));
  };

  const handleAddProduct = () => {
    if (newProduct.trim() !== "") {
      setProductList([
        ...productList,
        {
          id: productList.length + 1,
          name: newProduct,
          description: "",
          upvotes: 0,
          image: "https://images.unsplash.com/photo-1603251578711-3290ca1a0187?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuZXclMjBwcm9kdWN0fGVufDB8fHx8MTcxMzQ1OTYzMHww&ixlib=rb-4.0.3&q=80&w=1080",
        },
      ]);
      setNewProduct("");
      toast({
        title: "Product added.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxWidth="600px" margin="auto" padding={4}>
      <Heading as="h1" size="xl" textAlign="center" marginBottom={8}>
        ProductHunt Clone
      </Heading>
      <VStack spacing={8}>
        {productList.map((product) => (
          <Box key={product.id} width="100%">
            <HStack spacing={4}>
              <IconButton icon={<FaArrowUp />} onClick={() => handleUpvote(product.id)} variant="outline" />
              <Text fontWeight="bold">{product.upvotes}</Text>
              <Image src={product.image} alt={product.name} width="100px" />
              <Box>
                <Heading as="h2" size="md">
                  {product.name}
                </Heading>
                <Text>{product.description}</Text>
              </Box>
            </HStack>
            <Divider marginTop={4} />
          </Box>
        ))}
      </VStack>
      <HStack marginTop={8}>
        <Input value={newProduct} onChange={(e) => setNewProduct(e.target.value)} placeholder="Add a new product" />
        <Button leftIcon={<FaPlus />} onClick={handleAddProduct}>
          Add
        </Button>
      </HStack>
    </Box>
  );
};

export default Index;
