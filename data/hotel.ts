export const hotel = {
  whatsapp: 'https://wa.me/553438413608',
  maps: 'https://www.google.com/maps/search/?api=1&query=Rua+Duque+de+Caxias+930+Coromandel+MG',
  phone: '(34) 3841-3608',
  instagram: '@diamanterosapalace',
};

export const images = {
  facade: '/images/diamante-rosa/facade.svg', atrium: '/images/diamante-rosa/atrium.svg',
  room: '/images/diamante-rosa/room.svg', suite: '/images/diamante-rosa/suite.svg',
  breakfast: '/images/diamante-rosa/breakfast.svg', lake: '/images/diamante-rosa/lake.svg',
  auditorium: '/images/diamante-rosa/auditorium.svg',
};

export const differentials = [
  ['01','Receber bem','Atendimento cordial, cuidadoso e próximo.','atrium'],
  ['02','Descansar de verdade','Quartos confortáveis, limpeza e ambiente tranquilo.','room'],
  ['03','Começar bem o dia','Café da manhã farto e preparado com cuidado.','breakfast'],
  ['04','Sentir que escolheu certo','Boa reputação e experiências positivas de hóspedes.','lake'],
] as const;

export const journey = [
  ['01','Chegar','Recepção e acolhimento.','facade'], ['02','Respirar','Tranquilidade e estrutura.','atrium'],
  ['03','Descansar','Quartos confortáveis.','room'], ['04','Despertar','Café da manhã especial.','breakfast'],
  ['05','Continuar','Coromandel à sua volta.','lake'],
] as const;

export const stayOptions = [
  { short: 'Casal', title: 'Suíte Casal', label: 'ACOMODAÇÃO', image: images.suite, alt: 'Suíte de casal do hotel', description: 'Conforto, privacidade e tudo o que você precisa para uma estadia especial.', features: ['Ar-condicionado', 'Wi-Fi', 'TV', 'Frigobar', 'Café da manhã'] },
  { short: 'Individual', title: 'Suíte Solteiro', label: 'ACOMODAÇÃO', image: images.room, alt: 'Suíte individual do hotel', description: 'Uma pausa silenciosa e funcional para quem viaja a trabalho ou a lazer.', features: ['Ar-condicionado', 'Wi-Fi', 'Mesa de apoio', 'TV'] },
  { short: 'Família', title: 'Quarto Família', label: 'ACOMODAÇÃO', image: images.atrium, alt: 'Ambiente familiar do hotel', description: 'Espaço e praticidade para compartilhar a viagem com quem importa.', features: ['Configuração familiar', 'Wi-Fi', 'Frigobar', 'Café da manhã'] },
  { short: 'Especial', title: 'Suíte Luxo', label: 'EXPERIÊNCIA ESPECIAL', image: images.suite, alt: 'Suíte luxo do hotel', description: 'Mais amplitude, cuidado e detalhes para ocasiões que pedem algo especial.', features: ['Cama ampla', 'Ar-condicionado', 'Frigobar', 'Amenidades'] },
  { short: 'Eventos', title: 'Auditório & Eventos', label: 'ESTRUTURA', image: images.auditorium, alt: 'Auditório para eventos', description: 'Um ambiente preparado para reuniões, treinamentos e bons encontros.', features: ['Layout flexível', 'Climatização', 'Apoio de equipe', 'Wi-Fi'] },
  { short: 'Sabores', title: 'Café da manhã', label: 'EXPERIÊNCIA', image: images.breakfast, alt: 'Café da manhã do hotel', description: 'Variedade e cuidado para fazer a primeira hora do dia valer a pena.', features: ['Frutas', 'Pães e bolos', 'Opções quentes', 'Bebidas'] },
] as const;
