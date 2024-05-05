import React, { useState } from "react";
import { Container, VStack, Input, Button, Text, Box, Heading, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";

const Index = () => {
  const [location, setLocation] = useState("");
  const [sites, setSites] = useState([]);

  const handleSearch = () => {
    // Simulated data fetching
    const nearbySites = [
      { name: "Central Park", description: "A large public, urban park in the city center." },
      { name: "Museum of Modern Art", description: "An influential museum of modern art." },
      { name: "State Library", description: "A major public library with historical significance." },
    ];
    setSites(nearbySites);
  };

  return (
    <Container centerContent maxW="container.md" padding="4">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">
          Explore Nearby Sites
        </Heading>
        <Text>Enter a location to discover nearby places of interest.</Text>
        <Box width="100%">
          <Input placeholder="Enter location" value={location} onChange={(e) => setLocation(e.target.value)} size="md" />
          <Button leftIcon={<FaSearch />} colorScheme="teal" variant="solid" onClick={handleSearch} marginTop="2" width="100%">
            Search
          </Button>
        </Box>
        <List spacing={3} width="100%">
          {sites.map((site, index) => (
            <ListItem key={index} padding="2" boxShadow="md" borderRadius="md">
              <ListIcon as={FaMapMarkerAlt} color="green.500" />
              <Text fontWeight="bold">{site.name}</Text>
              <Text fontSize="sm">{site.description}</Text>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;
