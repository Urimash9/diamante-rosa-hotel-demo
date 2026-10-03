# Assets — Diamante Rosa Palace Hotel

A Build 03B migra a Home para um conjunto de **assets locais refinados** em `public/assets/diamante-rosa/`. A galeria remota usada temporariamente na Build 03A não é mais a direção aprovada e deverá ser removida assim que os binários locais estiverem presentes.

Consulte `ASSET-MANIFEST.md` para:

- nomes exatos dos arquivos;
- estrutura de pastas;
- distribuição aprovada por seção;
- regras para Hero, Experiência, Acomodações, Ritual, Café, Estrutura e Localização.

## Regra de implementação

1. Copiar todos os WebP refinados para as subpastas indicadas no manifesto.
2. Confirmar a existência de todos os arquivos locais.
3. Só então substituir em `data/hotel.ts` a função `photo(number)` por caminhos locais.
4. Remover o `remotePatterns` de `minas-gerais-hotels.com` do `next.config.mjs` quando nenhum componente depender mais dele.
5. Não utilizar screenshots brutos ou os SVGs conceituais antigos como fotografia final.

Os arquivos remotos atuais permanecem apenas como fallback temporário até a integração física dos assets locais, para não quebrar o preview existente.
