import { Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = false }: ProfileProps) {
  return (
    <>
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Camila Sbrussi</Text>
          <Text fontSize="small" color="gray.300">
            camila.sbrussi@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Camila Sbrussi"
        src="http://github.com/camisbrussi.png"
      />
    </>
  );
}
