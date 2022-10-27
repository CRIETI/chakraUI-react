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
} from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Siderbar";
import { Plus, PencilSimple, Trash } from "phosphor-react";
import { Pagination } from "../components/Pagination";

export function UserList() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="blue"
              leftIcon={<Icon as={Plus} fontSize={16} />}
            >
              Novo usuário
            </Button>
          </Flex>

          <Table>
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" w="8">
                  <Checkbox colorScheme="blue" />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de Criação</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
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
                  <HStack>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="pink"
                      leftIcon={<Icon as={PencilSimple} fontSize={16} />}
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
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Flex>
  );
}
