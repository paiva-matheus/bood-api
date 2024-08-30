import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const propertiesData = [
  {
    title: 'Apartamento Luxo',
    imageUrl:
      'https://cdn.pixabay.com/photo/2017/02/24/12/19/apartment-2094661_1280.jpg',
    price: 345453.45,
    description:
      'Apartamento de luxo com vista para o mar, localizado no centro da cidade.',
    features: ['Vista para o mar', 'Piscina', 'Academia', 'Sauna'],
  },
  {
    title: 'Cobertura Duplex',
    description:
      'Cobertura duplex com 4 quartos e 3 banheiros, ideal para grandes famílias.',
    imageUrl:
      'https://cdn.pixabay.com/photo/2022/01/26/04/47/house-6967908_1280.jpg',
    price: 10000000,
    features: ['4 Quartos', '3 Banheiros', 'Varanda', 'Área gourmet'],
  },
  {
    title: 'Kitnet Confortável',
    description:
      'Kitnet bem localizada, próxima ao transporte público e com todas as comodidades.',
    imageUrl:
      'https://cdn.pixabay.com/photo/2017/11/16/19/29/cottage-2955582_1280.jpg',
    price: 540328.99,
    features: [
      'Próximo ao transporte público',
      'Ar-condicionado',
      'Cozinha equipada',
    ],
  },
  {
    title: 'Casa de Campo',
    description:
      'Casa espaçosa em uma área rural tranquila, com grande terreno e jardim.',
    imageUrl:
      'https://cdn.pixabay.com/photo/2017/07/08/02/16/house-2483336_1280.jpg',
    price: 777777,
    features: ['Grande terreno', 'Jardim', 'Churrasqueira', 'Cerca elétrica'],
  },
  {
    title: 'Apartamento Moderno',
    description:
      'Apartamento moderno em um prédio novo, com acabamentos de alta qualidade.',
    imageUrl:
      'https://cdn.pixabay.com/photo/2014/04/15/22/47/real-estate-325285_1280.jpg',
    price: 666666,
    features: [
      'Acabamentos de alta qualidade',
      'Elevador',
      'Área de lazer',
      'Garagem',
    ],
  },
  {
    title: 'Casa com Piscina',
    description:
      'Casa com piscina e área de lazer, ideal para famílias e entretenimento.',
    imageUrl:
      'https://cdn.pixabay.com/photo/2019/03/08/20/14/kitchen-living-room-4043091_1280.jpg',
    price: 345453.45,
    features: [
      'Piscina',
      'Área de lazer',
      'Churrasqueira',
      'Garagem para 2 carros',
    ],
  },
  {
    title: 'Estúdio Minimalista',
    description: 'Estúdio compacto com design minimalista e bem iluminado.',
    imageUrl:
      'https://cdn.pixabay.com/photo/2023/12/11/06/21/living-room-8442897_1280.jpg',
    price: 15671320,
    features: ['Design minimalista', 'Bem iluminado', 'Próximo ao centro'],
  },
  {
    title: 'Apartamento de Luxo',
    description:
      'Apartamento com acabamento de luxo, localizado no coração da cidade.',
    imageUrl:
      'https://cdn.pixabay.com/photo/2018/01/26/08/15/dining-room-3108037_1280.jpg',
    price: 219328.99,
    features: ['Acabamento de luxo', 'Centro da cidade', 'Vista panorâmica'],
  },
  {
    title: 'Sítio Rural',
    description: 'Sítio com grande área verde e várias opções de lazer.',
    imageUrl:
      'https://cdn.pixabay.com/photo/2017/02/24/12/19/apartment-2094661_1280.jpg',
    price: 900777,
    features: ['Grande área verde', 'Área de lazer', 'Estábulo', 'Horta'],
  },
  {
    title: 'Casa em Condomínio',
    description: 'Casa em condomínio fechado com segurança 24 horas.',
    imageUrl:
      'https://media.istockphoto.com/id/1471730629/pt/foto/house-facade.jpg?s=2048x2048&w=is&k=20&c=1MfQsrTYXuc-LgA7eappEAz66LeSWshYrV4qyXAtCW4=',
    price: 290666,
    features: [
      'Segurança 24 horas',
      'Área comum',
      'Quadra esportiva',
      'Playground',
    ],
  },
  {
    title: 'Apartamento Compacto',
    description: 'Apartamento compacto ideal para solteiros ou casais.',
    imageUrl:
      'https://media.istockphoto.com/id/1279802524/pt/foto/full-kitchen-newly-built-with-dining-area.jpg?s=2048x2048&w=is&k=20&c=kK9jzaEOfa6jCR7t9Ex7N90NJg_wTpiZ0wJZHLYPPaI=',
    price: 290666,
    features: ['Compacto', 'Próximo a lojas', 'Sem vaga de garagem'],
  },
  {
    title: 'Mansão de Alto Padrão',
    description:
      'Mansão de alto padrão com várias suítes e área de lazer completa.',
    imageUrl:
      'https://media.istockphoto.com/id/1351431288/pt/foto/exterior-of-luxury-holiday-villa.jpg?s=2048x2048&w=is&k=20&c=zR89WH9-V-wlM9PCPy_Nh6cLHyjK1-xmtoPo4FEHhWo=',
    price: 290666,
    features: [
      'Várias suítes',
      'Área de lazer completa',
      'Cinemateca',
      'Adega',
    ],
  },
  {
    title: 'Apartamento Aconchegante',
    description:
      'Apartamento aconchegante e bem localizado, ideal para estudantes.',
    imageUrl:
      'https://media.istockphoto.com/id/1421422160/pt/foto/interior-of-living-room.jpg?s=2048x2048&w=is&k=20&c=Yp2IPHlX8hZoHV4AjpYlqHmg8_YvE0dUZIvJq15qzNM=',
    price: 290666,
    features: ['Próximo a universidade', 'Aconchegante', 'Mobiliado'],
  },
  {
    title: 'Casa de Praia',
    description:
      'Casa localizada na praia, perfeita para férias e momentos de relaxamento.',
    imageUrl:
      'https://cdn.pixabay.com/photo/2018/10/06/20/47/spain-3728693_1280.jpg',
    price: 290666,
    features: ['Vista para o mar', 'Acesso direto à praia', 'Varanda'],
  },
  {
    title: 'Apartamento Novo',
    description:
      'Apartamento recém-construído, com acabamentos modernos e localizações privilegiada.',
    imageUrl:
      'https://cdn.pixabay.com/photo/2020/01/23/02/29/house-4786769_1280.jpg',
    price: 290666,
    features: ['Acabamentos modernos', 'Perto de shopping', 'Área gourmet'],
  },
];

const seed = async () => {
  console.log('start seeding …');
  for (const _property of propertiesData) {
    const property = await prisma.property.create({
      data: _property,
    });
    console.log(`Created property with id: ${property.id}`);
  }
  console.log('seeding done');
};

seed()
  .catch((e) => {
    console.error('foo', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
