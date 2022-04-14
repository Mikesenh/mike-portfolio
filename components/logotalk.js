import Image from "next/image";

export default function LogoTalk(props) {
  return (
    <>
      <Image
        className={props.color}
        alt="yes"
        src={props.src}
        width={70}
        height={70}
      />
      <h4 className="m-0">{props.title}</h4>
      <p>{props.description}</p>
    </>
  );
}
