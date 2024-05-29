import { useState } from "react";
import { Box, Container, Flex, Heading, HStack, IconButton, Image, Text, VStack, Button, Input } from "@chakra-ui/react";
import { FaHome, FaSearch, FaBook, FaMusic, FaPlay, FaPause, FaForward, FaVolumeUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Index = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  const handlePlayPause = (song) => {
    if (currentSong === song && isPlaying) {
      setIsPlaying(false);
    } else {
      setCurrentSong(song);
      setIsPlaying(true);
    }
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

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
            <IconButton
              aria-label="Play"
              icon={isPlaying && currentSong === "Playlist 1" ? <FaPause /> : <FaPlay />}
              onClick={() => handlePlayPause("Playlist 1")}
              mt={2}
            />
          </Box>
          <Box bg="gray.700" color="white" p={4} m={2} borderRadius="md" width="200px" textAlign="center">
            <Image src="https://via.placeholder.com/150" alt="Playlist 2" mb={2} />
            <Text>Playlist 2</Text>
            <IconButton
              aria-label="Play"
              icon={isPlaying && currentSong === "Playlist 2" ? <FaPause /> : <FaPlay />}
              onClick={() => handlePlayPause("Playlist 2")}
              mt={2}
            />
          </Box>
          <Box bg="gray.700" color="white" p={4} m={2} borderRadius="md" width="200px" textAlign="center">
            <Image src="https://via.placeholder.com/150" alt="Playlist 3" mb={2} />
            <Text>Playlist 3</Text>
            <IconButton
              aria-label="Play"
              icon={isPlaying && currentSong === "Playlist 3" ? <FaPause /> : <FaPlay />}
              onClick={() => handlePlayPause("Playlist 3")}
              mt={2}
            />
          </Box>
        </Flex>
        <Link to="/create-playlist">
          <Button colorScheme="teal" mt={4}>Create New Playlist</Button>
        </Link>

        {/* Player Interface */}
        <Box bg="gray.800" color="white" p={4} mt={4} borderRadius="md">
          <Text>{currentSong ? `Now Playing: ${currentSong}` : "No song playing"}</Text>
          <HStack spacing={4} mt={2}>
            <IconButton aria-label="Play/Pause" icon={isPlaying ? <FaPause /> : <FaPlay />} onClick={() => handlePlayPause(currentSong)} />
            <IconButton aria-label="Skip" icon={<FaForward />} />
            <HStack spacing={2}>
              <FaVolumeUp />
              <Input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange} />
            </HStack>
          </HStack>
        </Box>
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