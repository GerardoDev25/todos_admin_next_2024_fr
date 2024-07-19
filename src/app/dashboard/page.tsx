import { redirect } from 'next/navigation';

import { auth } from '@/auth';
import { WidgetItem } from '@/components';

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect('/api/auth/signin');
  }

  return (
    <div>
      <div className='grid gap-6 grid-cols-1 sm:grid-cols-2'>
        <WidgetItem title='user connected'>
          <div className='flex flex-col'>
            <span>{session.user.name}</span>
            <span>{session.user.image}</span>
            <span>{session.user.email}</span>
          </div>
        </WidgetItem>
      </div>
    </div>
  );
}
