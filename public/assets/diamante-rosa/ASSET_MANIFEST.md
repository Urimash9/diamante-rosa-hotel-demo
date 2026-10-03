# Diamante Rosa — assets locais oficiais da Build 03B

Estes WebPs são o conjunto refinado aprovado para a Build 03B e ficam fisicamente no repositório. A Home não deve depender da galeria externa depois da integração.

## Masters locais
- `master/facade.webp` — fachada/entrada; Hero e etapa Chegar.
- `master/atrium.webp` — átrio/lobby; Receber bem, Respirar e apoio de Estrutura.
- `master/room.webp` — quarto; Descansar e segunda configuração do carrossel.
- `master/suite.webp` — suíte; slide principal do carrossel.
- `master/jacuzzi.webp` — detalhe da acomodação; nunca tratar como categoria de quarto.
- `master/breakfast.webp` — café da manhã; protagonista da seção Café e etapa Despertar. Usar crops distintos quando necessário.
- `master/auditorium.webp` — auditório; protagonista de Estrutura e Serviços.
- `master/lake.webp` — lago/entorno; Sentir que escolheu certo, Continuar e Localização.

## Regras
1. Na Home, usar caminhos locais em `/assets/diamante-rosa/master/...`.
2. Remover `photo(number)` e o `remotePatterns` exclusivo de `minas-gerais-hotels.com` quando não houver outro uso.
3. Não substituir estes masters por screenshots de Instagram/Maps.
4. Não inventar arquitetura, categorias de quartos ou serviços.
5. Um mesmo master pode receber crops CSS diferentes quando o conteúdo semântico for o mesmo.
6. Hero mobile pode usar `facade.webp` com `object-position`/crop próprios; não é obrigatório duplicar o arquivo.
