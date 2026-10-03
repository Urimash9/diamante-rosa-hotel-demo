export const hotel = {
  whatsapp: 'https://wa.me/553438413608',
  maps: 'https://www.google.com/maps/search/?api=1&query=Rua+Duque+de+Caxias+930+Coromandel+MG',
  phone: '(34) 3841-3608',
  instagram: '@diamanterosapalace',
};

const asset = (name: string) => `/assets/diamante-rosa/master/${name}`;

// Build 03B: fotografias refinadas e materializadas localmente no repositório.
// Não depender de hotlinks externos para a Home.
export const images = {
  facade: asset('facade.webp'),
  atrium: asset('atrium.webp'),
  room: asset('room.webp'),
  suite: asset('suite.webp'),
  jacuzzi: asset('jacuzzi.webp'),
  breakfast: asset('breakfast.webp'),
  // O mesmo master gastronômico pode receber crop diferente na sobreposição de detalhe.
  breakfastDetail: asset('breakfast.webp'),
  lake: asset('lake.webp'),
  auditorium: asset('auditorium.webp'),
};

export const differentials = [
  ['01','Receber bem','Atendimento cordial, cuidadoso e próximo.','atrium'],
  ['02','Descansar de verdade','Quartos confortáveis, limpeza e ambiente tranquilo.','room'],
  ['03','Começar bem o dia','Café da manhã farto e preparado com cuidado.','breakfast'],
  ['04','Sentir que escolheu certo','Boa reputação e experiências positivas de hóspedes.','lake'],
] as const;

export const journey = [
  ['01','Chegar','Recepção e acolhimento.','facade'],
  ['02','Respirar','Tranquilidade e estrutura.','atrium'],
  ['03','Descansar','Quartos confortáveis.','room'],
  ['04','Despertar','Café da manhã especial.','breakfast'],
  ['05','Continuar','Coromandel à sua volta.','lake'],
] as const;

export const stayOptions = [
  {
    short: 'Suíte casal',
    title: 'Suíte Casal',
    label: 'ACOMODAÇÃO',
    image: images.suite,
    alt: 'Suíte de casal do Diamante Rosa Palace Hotel',
    description: 'Conforto, privacidade e tudo o que você precisa para uma estadia especial.',
    features: ['Ar-condicionado', 'Wi-Fi', 'TV', 'Frigobar', 'Café da manhã'],
  },
  {
    short: 'Outra configuração',
    title: 'Outra configuração de hospedagem',
    label: 'ACOMODAÇÃO',
    image: images.room,
    alt: 'Outra configuração de quarto do Diamante Rosa Palace Hotel',
    description: 'Uma alternativa confortável e bem cuidada para diferentes perfis de estadia em Coromandel.',
    features: ['Ar-condicionado', 'Wi-Fi', 'TV'],
  },
  {
    short: 'Detalhes da suíte',
    title: 'Detalhes que completam a experiência',
    label: 'DETALHE DA ACOMODAÇÃO',
    image: images.jacuzzi,
    alt: 'Banheira de hidromassagem disponível em acomodação do hotel',
    description: 'A banheira de hidromassagem transforma a pausa em um momento ainda mais especial.',
    features: ['Hidromassagem', 'Privacidade', 'Conforto'],
  },
] as const;
