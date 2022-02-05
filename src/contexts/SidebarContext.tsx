import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ReactNode, createContext, useContext, useEffect } from "react";

interface SidebarDrawerProviderProps {
  children: ReactNode;
}


type SidebarDrawerContestData = UseDisclosureReturn;
const SideBarDrawerContext = createContext({} as SidebarDrawerContestData);

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure()
  const router = useRouter()

  useEffect(() => {
    disclosure.onClose
  }, [router.asPath])

  return (
    <SideBarDrawerContext.Provider value={disclosure}>
      {children}
    </SideBarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SideBarDrawerContext)