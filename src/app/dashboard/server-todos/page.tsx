export const dynamic = 'force-dynamic';
export const revalidate = 0;
// ? to always build this page without cache
// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config

import { Metadata } from 'next';
import prisma from '@/lib/prisma';
import { NewTodo, TodosGrid } from '@/todos';
import { getServerSessionAction } from '@/auth/actions';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Server todos',
  description: 'SEO Title',
};

export default async function ServerTodosPage() {
  const user = await getServerSessionAction();

  if (!user) redirect('/api/auth/signin');

  const todos = await prisma.todo.findMany({
    where: { userId: user.id },
    orderBy: { description: 'desc' },
  });

  return (
    <>
      <span className='text-3xl mb-10'>Server Actions</span>
      <div className='w-full px-5 mx-5 mb-5'>
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </>
  );
}
