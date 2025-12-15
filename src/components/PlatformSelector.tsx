import type { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatforms";
import { Menu, Button, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface PlatformSelectorProps {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = (props: PlatformSelectorProps) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="subtle">
          <BsChevronDown />
          {props.selectedPlatform?.name || "Platform"}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data?.results.map((platform) => (
              <Menu.Item
                onClick={() => props.onSelectPlatform(platform)}
                key={platform.id}
                value={platform.name}
              >
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
