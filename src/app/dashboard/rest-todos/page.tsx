import { Metadata } from 'next';
import prisma from '@/lib/prisma';
import { TodosGrid } from '@/todos';

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
      <TodosGrid todos={todos} />
    </div>
  );
}
