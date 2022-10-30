import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  HStack,
  theme,
  useBreakpointValue,
  IconButton,
} from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Plus, PencilSimple, Trash } from "phosphor-react";
import { Pagination } from "../components/Pagination";
import { Link } from "react-router-dom";

import useUserEditModal from "../components/Modais/UserEditModal";

export function UserList() {
  const { onOpen, UserEditModal } = useUserEditModal();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p="8"
          overflowY="auto"
          css={{
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-track": {
              width: "2px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: theme.colors.blue[100],
              borderRadius: "12px",
            },
          }}
        >
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>

            <Link to="/users/create">
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="blue"
                leftIcon={<Icon as={Plus} fontSize={16} />}
              >
                Novo usuário
              </Button>
            </Link>
          </Flex>

          <Table>
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" w="8">
                  <Checkbox colorScheme="blue" />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de Criação</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="blue" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Camila Sbrussi</Text>
                    <Text fontSize="sm" color="gray.300">
                      camila.sbrussi@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>27 de outubro de 2022</Td>
                <Td>
                  {isWideVersion ? (
                    <HStack>
                      <Button
                        size="sm"
                        fontSize="sm"
                        colorScheme="pink"
                        leftIcon={<Icon as={PencilSimple} fontSize={16} />}
                        onClick={onOpen}
                      >
                        Editar
                      </Button>
                      <Button
                        size="sm"
                        fontSize="sm"
                        colorScheme="red"
                        leftIcon={<Icon as={Trash} fontSize={16} />}
                      >
                        Excluir
                      </Button>
                    </HStack>
                  ) : (
                    <HStack>
                      <IconButton
                        aria-label="Editar"
                        icon={<Icon as={PencilSimple} fontSize={16} />}
                        fontSize={24}
                        colorScheme="pink"
                        mr="2"
                        onClick={onOpen}
                      />
                      <IconButton
                        aria-label="Excluir"
                        icon={<Icon as={Trash} fontSize={16} />}
                        fontSize={24}
                        colorScheme="red"
                        mr="2"
                      />
                    </HStack>
                  )}
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
      {UserEditModal}
    </Flex>
  );
}
