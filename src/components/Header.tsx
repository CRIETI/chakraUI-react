import { Avatar, Box, Flex, HStack, Icon, Input, Text } from "@chakra-ui/react";
import { MagnifyingGlass, Bell, UserPlus } from "phosphor-react";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      h="20"
      maxWidth={1480}
      mx="auto"
      mt="4"
      px="6"
      align="center"
      borderBottomWidth={1}
      borderColor="gray.700"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        CRIE_TI dash
      </Text>
      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.500"
          px="4"
          mr="4"
          placeholder="Busque na Plataforma"
          _placeholder={{ color: "gray.400" }}
          variant="unstyled"
        />
        <Icon as={MagnifyingGlass} fontSize={20} />
      </Flex>
      <Flex align="center" ml="auto">
        <HStack
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={Bell} fontSize={30} />
          <Icon as={UserPlus} fontSize={30} />
        </HStack>

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
      </Flex>
    </Flex>
  );
}
