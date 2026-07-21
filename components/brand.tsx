import Image from "next/image";

export function Brand() {
  return (
    <a className="brand" href="#inicio" aria-label="GranjaFlow, início">
      <Image
        className="brandLogo"
        src="/brand/granjaflow-logo.png"
        alt="GranjaFlow, gestão inteligente para granjas"
        width="320"
        height="140"
      />
    </a>
  );
}
