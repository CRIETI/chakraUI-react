import { Box, Button, HStack } from "@chakra-ui/react";

export function Pagination() {
  return (
    <HStack mt="8" justify="space-between" align="center" spacing="6">
      <Box>
        <strong>1</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack spacing="2">
        <Button
          size="sm"
          fontSize="xs"
          w="4"
          colorScheme="blue"
          disabled
          _disabled={{ bg: "blue.500", cursor: "default" }}
        >
          1
        </Button>
        <Button size="sm" fontSize="xs" w="4" _hover={{ bg: "blue.500" }}>
          2
        </Button>
        <Button size="sm" fontSize="xs" w="4" _hover={{ bg: "blue.500" }}>
          3
        </Button>
        <Button size="sm" fontSize="xs" w="4" _hover={{ bg: "blue.500" }}>
          4
        </Button>
        <Button size="sm" fontSize="xs" w="4" _hover={{ bg: "blue.500" }}>
          5
        </Button>
      </HStack>
    </HStack>
  );
}
