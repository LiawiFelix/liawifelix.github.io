import { TypeAnimation } from "react-type-animation";

export default function NameAnimation() {
  return (
    <TypeAnimation
      sequence={["I'm", 800, "I'm Felix", 800, "I'm Felix Liawi", 800, "   "]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
    />
  );
}
