import prisma from '@/lib/prisma';
import bcryptjs from 'bcryptjs';

export const signInEmailPassword = async (email: string, password: string) => {
  if (!email || !password) return null;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return await createUser(email, password);
  }

  if (!bcryptjs.compareSync(password, user.password ?? '')) return null;

  return user;
};

const createUser = async (email: string, pass: string) => {
  const password = await bcryptjs.hash(pass, 10);
  const name = email.split('@')[0];
  const user = await prisma.user.create({
    data: { name, email, password },
  });

  return user;
};
