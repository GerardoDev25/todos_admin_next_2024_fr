import { NextResponse, NextRequest } from 'next/server';
import prisma from '../../../lib/prisma';

export async function GET(request: Request) {
  await prisma.todo.deleteMany();

  await prisma.todo.createMany({
    data: [
      { description: 'soul stone', complete: true },
      { description: 'power stone' },
      { description: 'mind stone' },
      { description: 'reality stone' },
      { description: 'space stone' },
      { description: 'time stone' },
    ],
  });

  return NextResponse.json({
    message: 'Seed Executed',
  });
}
