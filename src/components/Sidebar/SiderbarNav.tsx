import { Box, Stack } from "@chakra-ui/react";
import { Gauge, UserList } from "phosphor-react";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={Gauge} label="Dashboard" />
        <NavLink icon={UserList} label="Usuários" />
      </NavSection>
    </Stack>
  );
}
