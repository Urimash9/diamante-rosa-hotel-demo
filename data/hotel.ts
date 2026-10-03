export const hotel = {
  whatsapp: 'https://wa.me/553438413608',
  maps: 'https://www.google.com/maps/search/?api=1&query=Rua+Duque+de+Caxias+930+Coromandel+MG',
  phone: '(34) 3841-3608',
  instagram: '@diamanterosapalace',
};

const photo = (number: number) => `https://diamante-rosa-palace.minas-gerais-hotels.com/data/Images/OriginalPhoto/6461/646123/646123764/image-coromandel-diamante-rosa-palace-hotel-${number}.JPEG`;

// Fotografias reais do hotel, selecionadas e recortadas pelo layout (sem UI ou overlays da fonte).
export const images = {
  facade: photo(1), atrium: photo(7), room: photo(5), suite: photo(2),
  jacuzzi: photo(3), breakfast: photo(4), breakfastDetail: photo(10),
  lake: photo(6), auditorium: photo(8),
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
  { short: 'Suíte casal', title: 'Suíte Casal', label: 'ACOMODAÇÃO', image: images.suite, alt: 'Suíte de casal do Diamante Rosa Palace Hotel', description: 'Conforto, privacidade e tudo o que você precisa para uma estadia especial.', features: ['Ar-condicionado', 'Wi-Fi', 'TV', 'Frigobar', 'Café da manhã'] },
  { short: 'Acomodação conforto', title: 'Acomodação Conforto', label: 'ACOMODAÇÃO', image: images.room, alt: 'Segunda configuração de quarto do Diamante Rosa Palace Hotel', description: 'Uma configuração versátil, silenciosa e bem cuidada para a sua passagem por Coromandel.', features: ['Ar-condicionado', 'Wi-Fi', 'Mesa de apoio', 'TV'] },
  { short: 'Detalhes da suíte', title: 'Detalhes que completam a experiência', label: 'DETALHE DA ACOMODAÇÃO', image: images.jacuzzi, alt: 'Jacuzzi disponível em acomodação do hotel', description: 'A banheira de hidromassagem transforma a pausa em um momento ainda mais especial.', features: ['Hidromassagem', 'Privacidade', 'Conforto', 'Amenidades'] },
] as const;
