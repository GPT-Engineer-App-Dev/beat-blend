import { Box, Container, Flex, Heading, HStack, IconButton, Image, Input, Text, VStack } from "@chakra-ui/react";
import { FaHome, FaSearch, FaBook, FaMusic } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.900" color="white" p={4} justifyContent="space-between" alignItems="center">
        <HStack spacing={8}>
          <IconButton aria-label="Home" icon={<FaHome />} variant="ghost" />
          <IconButton aria-label="Browse" icon={<FaMusic />} variant="ghost" />
          <IconButton aria-label="Library" icon={<FaBook />} variant="ghost" />
          <IconButton aria-label="Search" icon={<FaSearch />} variant="ghost" />
        </HStack>
        <Heading size="md">Music Streaming Service</Heading>
      </Flex>

      {/* Main Section */}
      <Box as="main" p={4}>
        <Heading mb={4}>Featured Playlists</Heading>
        <Flex wrap="wrap" justifyContent="space-around">
          <Box bg="gray.700" color="white" p={4} m={2} borderRadius="md" width="200px" textAlign="center">
            <Image src="https://via.placeholder.com/150" alt="Playlist 1" mb={2} />
            <Text>Playlist 1</Text>
          </Box>
          <Box bg="gray.700" color="white" p={4} m={2} borderRadius="md" width="200px" textAlign="center">
            <Image src="https://via.placeholder.com/150" alt="Playlist 2" mb={2} />
            <Text>Playlist 2</Text>
          </Box>
          <Box bg="gray.700" color="white" p={4} m={2} borderRadius="md" width="200px" textAlign="center">
            <Image src="https://via.placeholder.com/150" alt="Playlist 3" mb={2} />
            <Text>Playlist 3</Text>
          </Box>
        </Flex>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.900" color="white" p={4} textAlign="center">
        <HStack spacing={8} justifyContent="center">
          <Text>About</Text>
          <Text>Contact</Text>
          <Text>Terms of Service</Text>
        </HStack>
      </Box>
    </Container>
  );
};

export default Index;