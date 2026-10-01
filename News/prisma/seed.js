const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Create core categories
  const categories = [
    { name: 'Top Stories', slug: 'top-stories' },
    { name: 'World', slug: 'world' },
    { name: 'Politics', slug: 'politics' },
    { name: 'Business', slug: 'business' },
    { name: 'Economy', slug: 'economy' },
    { name: 'Markets', slug: 'markets' },
    { name: 'Technology', slug: 'technology' },
  ];

  for (const cat of categories) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {},
      create: cat,
    });
  }

  // Create core countries
  const countries = [
    { name: 'France', slug: 'france', code: 'FR' },
    { name: 'USA', slug: 'usa', code: 'US' },
    { name: 'Canada', slug: 'canada', code: 'CA' },
    { name: 'Germany', slug: 'germany', code: 'DE' },
    { name: 'UK', slug: 'uk', code: 'GB' },
    { name: 'Spain', slug: 'spain', code: 'ES' },
    { name: 'Australia', slug: 'australia', code: 'AU' },
    { name: 'India', slug: 'india', code: 'IN' },
  ];

  for (const country of countries) {
    await prisma.country.upsert({
      where: { slug: country.slug },
      update: {},
      create: country,
    });
  }

  console.log('Seed completed successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
