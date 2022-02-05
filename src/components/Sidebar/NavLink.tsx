import { Icon, Link as ChakraLink, Text, LinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import { useSidebarDrawer } from "../../contexts/SidebarContext";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends LinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  const { isOpen, onClose } = useSidebarDrawer()
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest} onClick={onClose}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>

  )
}