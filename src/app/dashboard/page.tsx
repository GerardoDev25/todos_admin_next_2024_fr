import { getServerSession } from 'next-auth';

import { WidgetItem } from '@/components';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/api/auth/signin');
  }

  return (
    <div>
      <div className='grid gap-6 grid-cols-1 sm:grid-cols-2'>
        <WidgetItem title='user connected S-side'>
          <div className='flex flex-col'>
            <span>{session?.user?.name}</span>
            <span>{session?.user?.image}</span>
            <span>{session?.user?.email}</span>
          </div>
          <div className="">
            {JSON.stringify(session,null,4)}
          </div>
        </WidgetItem>
      </div>
    </div>
  );
}
