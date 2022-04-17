import Image from "next/image";
import Link from "next/link";

export default function Thanks() {
  return (
    <>
      <div className="container d-flex flex-column align-items-center my-5 p-5">
        <Image
          src="/mail_hireme.png"
          alt="(801) 634-7693"
          men
          width={225}
          height={225}
        />
        <h1 className="mt-3">Thanks, for Reach Out!</h1>
        <p className="">
          You'll get a email from my bot, which just confirms that it works!
        </p>
        <Link href="/" passHref>
          <button type="submit" className="btn btn-primary ">
            Thanks, Again!
          </button>
        </Link>
      </div>
    </>
  );
}
