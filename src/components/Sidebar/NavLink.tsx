import {
  Text,
  Icon,
  Link,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps extends ChakraLinkProps {
  label: string;
  icon: ElementType;
}

export function NavLink({ label, icon, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" verticalAlign="center" {...rest}>
      <Icon as={icon} fontSize={24} />
      <Text fontSize="md" ml="4">
        {label}
      </Text>
    </Link>
  );
}
