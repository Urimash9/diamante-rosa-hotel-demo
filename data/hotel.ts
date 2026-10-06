export const hotel = {
  whatsapp: 'https://wa.me/553438413608',
  maps: 'https://www.google.com/maps/search/?api=1&query=Rua+Duque+de+Caxias+930+Coromandel+MG',
  phone: '(34) 3841-3608',
  instagram: '@diamanterosapalace',
};

const asset = (name: string) => `/assets/diamante-rosa/master/${name}.webp`;

// Masters locais verificados visualmente; os hotlinks numerados devolviam a mesma fachada.
export const images = {
  facade: asset('facade'), atrium: asset('atrium'), room: asset('room'), suite: asset('suite'),
  jacuzzi: asset('jacuzzi'), breakfast: asset('breakfast'),
  // O conjunto aprovado tem um único buffet; o detalhe usa outro recorte desse master.
  breakfastDetail: asset('breakfast'), lake: asset('lake'), auditorium: asset('auditorium'),
};

export const imageAlts = {
  facade: 'Fachada e entrada do Diamante Rosa Palace Hotel',
  atrium: 'Átrio do hotel com lobby e áreas de convivência',
  room: 'Quarto do hotel com camas preparadas para receber hóspedes',
  breakfast: 'Buffet de café da manhã com frutas, pães, bolos e bebidas',
  lake: 'Lagoa e entorno próximo ao Diamante Rosa Palace Hotel',
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
  { short: 'Outra configuração', title: 'Outra configuração de hospedagem', label: 'ACOMODAÇÃO', image: images.room, alt: 'Segunda configuração de quarto do Diamante Rosa Palace Hotel', description: 'Uma alternativa confortável e bem cuidada para a sua passagem por Coromandel.', features: ['Ar-condicionado', 'Wi-Fi', 'Mesa de apoio', 'TV'] },
  { short: 'Detalhes da acomodação', title: 'Detalhes da acomodação', label: 'DETALHE DA ACOMODAÇÃO', image: images.jacuzzi, alt: 'Jacuzzi disponível em acomodação do hotel', description: 'A banheira de hidromassagem transforma a pausa em um momento ainda mais especial.', features: ['Hidromassagem', 'Privacidade', 'Conforto', 'Amenidades'] },
] as const;
