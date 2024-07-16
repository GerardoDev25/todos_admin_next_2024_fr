// ? to always build this page without cache
// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config
export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { Metadata } from 'next';
import prisma from '@/lib/prisma';
import { NewTodo, TodosGrid } from '@/todos';

export const metadata: Metadata = {
  title: 'Todos list',
  description: 'SEO Title',
};

export default async function RestTodoPage() {
  const todos = await prisma.todo.findMany({
    orderBy: { description: 'desc' },
  });
  // console.log('builded rest-todos');
  return (
    <div>
      <div className='w-full px-5 mx-5 mb-5'>
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </div>
  );
}
