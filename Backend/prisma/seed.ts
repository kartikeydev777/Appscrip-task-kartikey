import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const categories = [
  {
    name: "Clothing",
    products: [
      {
        title: "Organic Cotton Oversized Tee",
        description:
          "Soft mid-weight cotton tee with a relaxed streetwear fit.",
        price: 1299,
        image:
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Tailored Linen Shirt",
        description:
          "Breathable linen shirt designed for warm-weather layering.",
        price: 2499,
        image:
          "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Classic Denim Jacket",
        description:
          "Structured denim jacket with utility pockets and a washed finish.",
        price: 3999,
        image:
          "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=900&q=80"
      }
    ]
  },
  {
    name: "Accessories",
    products: [
      {
        title: "Minimal Leather Wallet",
        description:
          "Compact wallet with card slots, a cash sleeve, and clean stitching.",
        price: 1799,
        image:
          "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Everyday Canvas Tote",
        description:
          "Durable canvas tote with reinforced handles for daily carry.",
        price: 999,
        image:
          "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Polarized Square Sunglasses",
        description:
          "Lightweight sunglasses with UV protection and polarized lenses.",
        price: 2199,
        image:
          "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80"
      }
    ]
  },
  {
    name: "Footwear",
    products: [
      {
        title: "Leather Low-Top Sneakers",
        description:
          "Clean low-top sneakers with cushioned insoles and rubber outsoles.",
        price: 4599,
        image:
          "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Trail Runner Shoes",
        description:
          "Lightweight trail shoes with grip-focused soles for mixed terrain.",
        price: 5299,
        image:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Suede Chelsea Boots",
        description:
          "Pull-on suede boots with elastic side panels and a stacked heel.",
        price: 6499,
        image:
          "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=900&q=80"
      }
    ]
  },
  {
    name: "Home",
    products: [
      {
        title: "Ceramic Pour-Over Set",
        description:
          "Matte ceramic brewer and carafe set for slow coffee mornings.",
        price: 2899,
        image:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Woven Cotton Throw",
        description:
          "Textured cotton throw blanket for sofas, beds, and reading corners.",
        price: 1999,
        image:
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Brass Desk Lamp",
        description:
          "Adjustable desk lamp with a warm brass finish and focused light.",
        price: 3499,
        image:
          "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80"
      }
    ]
  }
];

async function main() {
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  for (const category of categories) {
    await prisma.category.create({
      data: {
        name: category.name,
        products: {
          create: category.products
        }
      }
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
