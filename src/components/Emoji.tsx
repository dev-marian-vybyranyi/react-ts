import buiiEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, type ImageProps } from "@chakra-ui/react";

interface EmojiProps {
  rating: number;
}

const Emoji = (props: EmojiProps) => {
  if (props.rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { alt: "meh", src: meh, boxSize: "25px" },
    4: { alt: "thumbs up", src: thumbsUp, boxSize: "25px" },
    5: { alt: "bulls eye", src: buiiEye, boxSize: "35px" },
  };

  return <Image {...emojiMap[props.rating]} marginTop={1} />;
};

export default Emoji;
