import { redirect } from 'next/navigation';

// import { auth } from '@/auth/auth';
export default async function Home() {
  // const session = await auth();

  // if (session?.user) {
  //   redirect('/dashboard');
  // }
  return (
    <>
      <span className='text-5xl'>Hello world</span>
    </>
  );
}
