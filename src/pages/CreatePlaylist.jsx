import { useState } from "react";
import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Textarea, VStack } from "@chakra-ui/react";

const CreatePlaylist = () => {
  const [playlistName, setPlaylistName] = useState("");
  const [description, setDescription] = useState("");
  const [songs, setSongs] = useState([]);

  const handleAddSong = () => {
    setSongs([...songs, ""]);
  };

  const handleSongChange = (index, value) => {
    const newSongs = [...songs];
    newSongs[index] = value;
    setSongs(newSongs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle playlist creation logic here
    console.log("Playlist Created:", { playlistName, description, songs });
  };

  return (
    <Container maxW="container.md" p={4}>
      <Heading mb={4}>Create New Playlist</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl id="playlist-name" isRequired>
            <FormLabel>Playlist Name</FormLabel>
            <Input
              type="text"
              value={playlistName}
              onChange={(e) => setPlaylistName(e.target.value)}
            />
          </FormControl>
          <FormControl id="description">
            <FormLabel>Description</FormLabel>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormControl>
          <FormControl id="songs">
            <FormLabel>Songs</FormLabel>
            {songs.map((song, index) => (
              <Input
                key={index}
                type="text"
                placeholder={`Song ${index + 1}`}
                value={song}
                onChange={(e) => handleSongChange(index, e.target.value)}
                mb={2}
              />
            ))}
            <Button onClick={handleAddSong}>Add Song</Button>
          </FormControl>
          <Button type="submit" colorScheme="blue" width="full">
            Create Playlist
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default CreatePlaylist;