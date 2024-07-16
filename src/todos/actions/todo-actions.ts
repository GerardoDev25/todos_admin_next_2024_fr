'use server';

import prisma from '@/lib/prisma';
import { Todo } from '@prisma/client';
import { revalidatePath } from 'next/cache';

export const toggleTodoAction = async (
  id: string,
  complete: boolean
): Promise<Todo> => {
  const todo = await prisma.todo.findFirst({ where: { id } });

  if (!todo) {
    throw `Todo with id:${id} not found`;
  }

  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: { complete },
  });
  revalidatePath('/dashboard/server-todos');
  return updatedTodo;
};

export async function addTodoAction(
  description: string
): Promise<{ ok: boolean; todo: Todo | null }> {
  try {
    const todo = await prisma.todo.create({
      data: { description },
    });

    revalidatePath('/dashboard/server-todos');
    return { ok: true, todo };
  } catch (error) {
    return { ok: false, todo: null };
  }
}

export const deleteTodosCompletedAction = async (): Promise<void> => {
  await prisma.todo.deleteMany({
    where: { complete: true },
  });
  revalidatePath('/dashboard/server-todos');
};
