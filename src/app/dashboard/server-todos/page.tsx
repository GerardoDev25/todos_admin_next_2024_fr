import { Metadata } from 'next';
import prisma from '@/lib/prisma';
import { NewTodo, TodosGrid } from '@/todos';

export const metadata: Metadata = {
  title: 'Server todos',
  description: 'SEO Title',
};

export default async function ServerTodosPage() {
  const todos = await prisma.todo.findMany({
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
