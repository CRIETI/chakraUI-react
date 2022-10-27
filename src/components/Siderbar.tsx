import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { Gauge, UserList } from "phosphor-react";

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="sm">
            GERAL
          </Text>
          <Stack spacing="4" align="stretch" mt="8">
            <Link display="flex" verticalAlign="center">
              <Icon as={Gauge} fontSize={24} />
              <Text fontSize="md" ml="4">
                Dashboard
              </Text>
            </Link>

            <Link display="flex" verticalAlign="center">
              <Icon as={UserList} fontSize={24} />
              <Text fontSize="md" ml="4">
                Usuários
              </Text>
            </Link>
          </Stack>
        </Box>

        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="sm">
            GERAL
          </Text>
          <Stack spacing="4" align="stretch" mt="8">
            <Link display="flex" verticalAlign="center">
              <Icon as={Gauge} fontSize={24} />
              <Text fontSize="md" ml="4">
                Dashboard
              </Text>
            </Link>

            <Link display="flex" verticalAlign="center">
              <Icon as={UserList} fontSize={24} />
              <Text fontSize="md" ml="4">
                Usuários
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
