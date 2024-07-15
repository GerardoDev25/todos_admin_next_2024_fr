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

  return (
    <div>
      <div className='w-full px-5 mx-5 mb-5'>
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </div>
  );
}
