import {
  Box,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { SidebarNav } from "./SiderbarNav";

export function Sidebar() {
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={true} onClose={() => {}} placement="left">
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="8">
            <DrawerCloseButton />
            <DrawerHeader>Navegação</DrawerHeader>
            <SidebarNav />
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }
  return (
    <Box as="aside" w="64" mr="8">
      <SidebarNav />
    </Box>
  );
}
