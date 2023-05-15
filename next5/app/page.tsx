import Posts from "./components/Posts";
import ProfilePicture from "./components/ProfilePicture";

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <ProfilePicture />
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Mateusz</span>
        </span>
      </p>
      <Posts />
    </main>
  );
}
