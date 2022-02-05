import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Paloma Cardoso</Text>
          <Text coloro="gray.300" fontSize="small">paloma.cardoso10@gmail.com</Text>
        </Box>
      )}

      <Avatar size="md" name="Paloma Cardoso" src="http://github.com/palomacardos0.png" />
    </Flex>
  );
}