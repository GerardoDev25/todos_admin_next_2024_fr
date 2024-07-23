import { NextResponse, NextRequest } from 'next/server';
import prisma from '../../../../lib/prisma';
import { boolean, object, string } from 'yup';
import { Todo } from '@prisma/client';
import { getServerSessionAction } from '@/auth/actions';

interface Segments {
  params: { id: string };
}

const getTodo = async (id: string): Promise<Todo | null> => {
  const user = await getServerSessionAction();

  if (!user) {
    return null;
  }
  const todo = await prisma.todo.findFirst({ where: { id, userId: user.id } });

  return todo;
};

export async function GET(request: Request, { params }: Segments) {
  const { id } = params;

  const todo = await getTodo(id);

  if (!todo) {
    return NextResponse.json(
      { error: `Todo with id: ${id} not found` },
      { status: 404 }
    );
  }

  return NextResponse.json(todo);
}

const putSchema = object({
  description: string().optional(),
  complete: boolean().optional(),
});

export async function PUT(request: Request, { params }: Segments) {
  const { id } = params;

  const todo = await getTodo(id);

  if (!todo) {
    return NextResponse.json(
      { error: `Todo with id: ${id} not found` },
      { status: 404 }
    );
  }

  try {
    const { complete, description } = await putSchema.validate(
      await request.json()
    );

    const data: { description?: string; complete?: boolean } = {};
    if (complete !== undefined) {
      data.complete = complete;
    }

    if (description) {
      data.description = description;
    }

    const updatedTodo = await prisma.todo.update({
      where: { id },
      data,
    });

    return NextResponse.json(updatedTodo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
