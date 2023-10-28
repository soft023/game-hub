import { Image, ImageProps } from "@chakra-ui/react";
import bullEyes from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbUp from "../assets/thumbs-up.webp";

interface Props {
  ratings: number;
}
const Emoji = ({ ratings }: Props) => {
  const mapEmoji: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbUp, alt: "Recommended", boxSize: "25px" },
    5: { src: bullEyes, alt: "Exceptional", boxSize: "35px" },
  };
  return <Image {...mapEmoji[ratings]} marginTop={1} />;
};

export default Emoji;
