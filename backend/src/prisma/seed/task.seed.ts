// https://www.prisma.io/docs/guides/database/seed-database#example-seed-scripts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.task.createMany({
    data: [
      { title: 'Test task', content: 'testing prisma', status: 'pending' },
      { title: 'Test seed task', content: 'testing seed', status: 'pending' },
    ],
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
