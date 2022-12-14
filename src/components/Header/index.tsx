import { useContext } from "react";
import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationNav";
import { SearchBox } from "./SearchBox";
import { Profile } from "./Profile";
import { List } from "phosphor-react";
import { SidebarDrawerContext } from "../contexts/SidebarDrawerContext";

export function Header() {
  const { onOpen } = useContext(SidebarDrawerContext);
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
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
      {!isWideVersion && (
        <IconButton
          aria-label="Abrir Navegação"
          icon={<Icon as={List} />}
          fontSize={24}
          variant="unstyled"
          mr="2"
          onClick={onOpen}
        />
      )}
      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
