import { NextResponse, NextRequest } from 'next/server';
import prisma from '../../lib/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const take = Number(searchParams.get('take') ?? '10');
  const skip = Number(searchParams.get('skip') ?? '0');

  if (isNaN(take)) {
    return NextResponse.json(
      { error: 'take most be a number' },
      { status: 400 }
    );
  }

  if (isNaN(skip)) {
    return NextResponse.json(
      { error: 'skip most be a number' },
      { status: 400 }
    );
  }

  const todos = await prisma.todo.findMany({ take, skip });

  return NextResponse.json(todos);
}
