import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import Link from "next/link";
import { Metadata } from "next";

type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({ params: { userId } }: Params): Promise<Metadata>{
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData

  return {
    title: user.name,
    description: `This is the page of ${user.name}`
  }
}

// export const metadata: Metadata = {
//   title: "123Id",
// };

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPosts(userId);

  //const [user, userPosts] = await Promise.all([userData, userPostsData]);
  const user = await userData;
  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        {/* @ts-expect-error Async Server Component */}
        <UserPosts promise={userPostsData} />
        <Link href="/users">Back to Users</Link>
      </Suspense>
    </>
  );
}
