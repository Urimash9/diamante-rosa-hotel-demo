# Diamante Rosa Palace Hotel — Assets refinados / Build 03B

Este diretório é o destino oficial dos assets locais refinados. Após a integração, a Home não deve depender de hotlinks de Instagram, Google Maps, Booking ou `minas-gerais-hotels.com`.

## Estrutura e arquivos esperados

```text
public/assets/diamante-rosa/
├── hero/
│   ├── hero-fachada-frontal.webp
│   ├── hero-fachada-aerea-lago.webp
│   ├── hero-fachada-frontal-mobile.webp
│   └── hero-fachada-aerea-lago-mobile.webp
├── experiencia/
│   ├── experiencia-atrio.webp
│   ├── experiencia-quarto.webp
│   ├── experiencia-cafe.webp
│   └── experiencia-lago.webp
├── acomodacoes/
│   ├── acomodacao-suite-casal.webp
│   ├── acomodacao-quarto-02.webp
│   └── acomodacao-jacuzzi.webp
├── ritual/
│   ├── ritual-chegar.webp
│   ├── ritual-respirar.webp
│   ├── ritual-descansar.webp
│   ├── ritual-despertar.webp
│   └── ritual-continuar.webp
├── cafe/
│   ├── cafe-buffet-principal.webp
│   └── cafe-detalhe.webp
├── estrutura/
│   ├── estrutura-auditorio.webp
│   └── estrutura-atrio.webp
└── localizacao/
    ├── localizacao-lago-01.webp
    ├── localizacao-fachada-aerea.webp
    └── localizacao-lago-02.webp
```

## Uso aprovado por seção

- **Hero**: fachada frontal ou aérea; usar variantes mobile quando necessário.
- **Experiência / Receber bem**: `experiencia-atrio.webp`.
- **Experiência / Descansar de verdade**: `experiencia-quarto.webp`.
- **Experiência / Começar bem o dia**: `experiencia-cafe.webp`.
- **Experiência / Sentir que escolheu certo**: `experiencia-lago.webp`.
- **Carrossel de acomodações**: suíte casal, segundo quarto e jacuzzi como detalhe da acomodação — não tratar jacuzzi como categoria de quarto.
- **Ritual**: chegar/fachada, respirar/átrio, descansar/quarto, despertar/café, continuar/lago.
- **Café da manhã**: buffet principal + detalhe.
- **Estrutura**: auditório como protagonista; átrio como apoio.
- **Localização**: lago + fachada aérea/contexto.

## Regras

1. Não usar screenshots brutos com UI, bordas, overlays ou barras do celular.
2. Não retornar aos SVGs conceituais antigos como fotografia final.
3. Não usar `photo(1)`, `photo(2)` etc. nem outras URLs remotas após a integração.
4. Manter nomes semânticos acima para facilitar futuras trocas.
5. O screenshot do Google Maps é somente referência espacial; não é asset final.
6. Não inventar arquitetura, categorias de quarto ou comodidades que não estejam documentadas.

## Estado atual

Os binários refinados estão preparados externamente para esta Build e devem ser copiados para os caminhos acima antes da troca de `data/hotel.ts`. Não remover os fallbacks atuais antes de confirmar que todos os arquivos locais existem.
