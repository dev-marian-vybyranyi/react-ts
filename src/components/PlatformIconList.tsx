import type { Platform } from "@/entities/Platform";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import type { IconType } from "react-icons";
interface PlatformIvonListProps {
  platforms: Platform[];
}

const PlatformIvonList = (props: PlatformIvonListProps) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
  };

  return (
    <HStack marginY={1}>
      {props.platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={iconMap[platform.slug] || BsGlobe}
          color="gray.500"
        />
      ))}
    </HStack>
  );
};

export default PlatformIvonList;
