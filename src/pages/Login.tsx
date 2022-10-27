import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from "../components/Input";

export function Login() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxW={360}
        p="8"
        bg="gray.700"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <Input name="email" type="email" label="Email" />
          <Input name="password" type="password" label="Senha" />
        </Stack>
        <Button type="submit" mt="6" size="lg" colorScheme="blue">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
