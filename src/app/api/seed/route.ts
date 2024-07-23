import { NextResponse, NextRequest } from 'next/server';
import bcryptjs from 'bcryptjs';

import prisma from '../../../lib/prisma';

export async function GET(request: NextRequest) {
  await prisma.todo.deleteMany();
  await prisma.user.deleteMany();

  const user = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john@example.com',
      password: bcryptjs.hashSync('123456'),
      roles: ['admin', 'user', 'super-user'],
      todos: {
        create: [
          { description: 'soul stone', complete: true },
          { description: 'power stone' },
          { description: 'mind stone' },
          { description: 'reality stone' },
          { description: 'space stone' },
          { description: 'time stone' },
        ],
      },
    },
  });

  return NextResponse.json({
    message: 'Seed Executed',
  });
}
