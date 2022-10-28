import { Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <>
      <Box mr="4" textAlign="right">
        <Text>Camila Sbrussi</Text>
        <Text fontSize="small" color="gray.300">
          camila.sbrussi@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Camila Sbrussi"
        src="http://github.com/camisbrussi.png"
      />
    </>
  );
}
