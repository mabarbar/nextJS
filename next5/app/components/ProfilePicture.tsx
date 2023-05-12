import Image from "next/image";

export default function ProfilePicture() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        src="/images/pp.jpg"
        width={200}
        height={200}
        alt="Profile picture"
        priority={true}
      />
    </section>
  );
}
