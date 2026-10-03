# Assets — Diamante Rosa Palace Hotel

As fotografias reais são entregues pela galeria pública do hotel e processadas pelo `next/image` (AVIF/WebP, dimensionamento e crop por seção). A origem centralizada está em `data/hotel.ts`; assim, nenhum print de interface ou overlay de plataforma entra na página.

Organização editorial:

- `hero`: fachada/entrada (`photo(1)`)
- `experiencia`: átrio (`photo(7)`), quarto (`photo(5)`), buffet (`photo(4)`) e entorno (`photo(6)`)
- `acomodacoes`: suíte (`photo(2)`), variação de quarto (`photo(5)`) e jacuzzi (`photo(3)`)
- `ritual`: fachada, átrio, quarto, café e entorno
- `cafe`: buffet (`photo(4)`) e detalhe gastronômico (`photo(10)`)
- `estrutura`: auditório (`photo(8)`) e átrio (`photo(7)`)
- `localizacao`: lagoa/entorno (`photo(6)`)

As subpastas ficam reservadas para os arquivos-mestre fornecidos diretamente pelo hotel, sem alterar os caminhos usados pelos componentes.
