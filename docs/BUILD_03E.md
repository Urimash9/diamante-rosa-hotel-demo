# Build 03E — refinamento final controlado

Branch: `build-03e-refino-final`.
HEAD inicial e checkpoint visual mestre: `88f2a9f8056a63f6c67a16e331fe97db618b27b9`, `checkpoint-build-03d-estrutura-aprovada`.
Preview da base inspecionado: `https://diamante-rosa-hotel-demo-r8jro6rqz-john-e7bd.vercel.app/`.

## Causas e alterações

- Carrossel mobile: a combinação `nowrap` + margens negativas + `overflow-x:auto` não acomodava os três estados. A navegação agora distribui os três botões em colunas iguais e permite quebra de texto. Mantém Suíte casal, Outra configuração e Detalhes da acomodação. O preview lateral fica menor e separado da imagem ativa; o card continua abaixo, com controles em fluxo para respeitar títulos de alturas diferentes. Setas, contador, DiamondMarkers e gesto de swipe preservados. O teste remoto revelou que o drag nativo das imagens interrompia o gesto de mouse: `draggable={false}` evita essa interferência e o estado usa atualização funcional.
- Avaliações mobile: a nota vinha depois das citações na ordem do HTML. O bloco principal agora precede os depoimentos; apenas as três primeiras citações aparecem no mobile. A posição absoluta da nota e as seis áreas explícitas de grid desktop continuam iguais.
- Ritual mobile: fotos passam de 105px para 135–170px, com larguras de 58–68%, crops locais e offsets alternados de 8px. A linha continua vertical, agora ancorada aos próprios momentos. A linha fica no início do wrapper para continuar atrás das fotografias. Os seletores usam `nth-of-type` para preservar a alternância dos cinco momentos independentemente da linha. A primeira revisão do preview identificou e corrigiu uma regressão de ordem de pintura.
- Café: a chave complementar era um alias do único buffet local. Sem asset gastronômico distinto, a segunda imagem foi removida, junto com o alias e as regras mortas. A imagem principal, o tratamento natural e a composição desktop permanecem.
- Localização: bordas e sombras existentes integram hotel e lagoa ao mapa; label recebe prioridade de camada. Dimensões mobile têm ajustes pequenos. SVG, posição geográfica, marker, endereço e botão Maps preservados.
- CTA mobile: escala passa a `clamp(2.3rem,9.4vw,2.6rem)`, com largura de 13ch, quebra balanceada e entrelinha de 1.08. Desktop intacto.
- Regras mobile afetadas foram consolidadas na media query sistêmica existente, removendo declarações concorrentes anteriores. Não foi acrescentado outro bloco de overrides ao final.

Hero, Experiência, Serviços e Footer não tiveram alterações de markup ou declarações. Nenhum master, cor, componente, símbolo ou animação foi criado.

## Validação técnica

- `npm run build`: passou, incluindo TypeScript. Permanece o aviso preexistente do Autoprefixer sobre `align-items:end`.
- `git diff --check`: passou.
- Home em produção local: HTTP 200; oito masters HTTP 200; todos os caminhos de imagem renderizados são locais; âncoras internas resolvem.
- Comparação de cascata nas larguras 375, 390, 412, 430, 768, 1280 e 1440: declarações protegidas iguais à base; regras mobile consolidadas aplicáveis. Isso é validação de código, **não substitui renderização visual**.
- Handlers de touch e regras `prefers-reduced-motion` preservados; teste físico mobile não realizado. A correção do mouse deve ser retestada no preview final.

## Limitação de validação visual

O vídeo de referência mobile/desktop e o preview mestre foram analisados antes da edição. O navegador remoto não expõe ajuste de viewport. A instalação oficial do Chromium para Playwright falhou porque a resposta de download não era um ZIP válido. Nenhuma proteção foi desabilitada e o caminho de rede permaneceu inalterado.

A conferência visual exata em 375, 390, 412, 430, 768, 1280 e 1440, inclusive overflow efetivo, swipe e reduced motion, permanece pendente. Não declarar esta rodada totalmente homologada apenas pelo build ou pela comparação de CSS. No primeiro preview da Build 03E, a revisão desktop em viewport 1363px (conteúdo 1348px) confirmou as mesmas dimensões de todas as seções da base, carrossel nos três estados, avaliações editoriais, buffet sem sobreposição e CTA/Footer preservados. As 17 imagens estavam carregadas com caminhos locais, sem overflow horizontal nessa largura e sem erros de aplicação no console (apenas mensagens da extensão do navegador). O reteste do preview final será informado na entrega.

## ASSET A SUBSTITUIR / MELHORAR

| Asset | Resolução local | Limitação |
| --- | --- | --- |
| `auditorium.webp` | 760×427 | Pouca definição para o protagonismo desktop; preservar até receber master melhor |
| `suite.webp` | 760×570 | Definição limitada no carrossel desktop |
| `room.webp` | 607×760 | Crop vertical limita o uso horizontal; composição próxima à suíte |
| Detalhe gastronômico | Ausente | Solicitar fotografia real distinta se desejada; não reaproveitar o buffet |

Os demais masters também são pequenos (fachada 900×506; átrio 607×760; buffet 760×427; lagoa 760×428; jacuzzi 760×570). Nenhum filtro de sharpen foi aplicado para mascarar resolução.

`main` e `checkpoint-build-03d-estrutura-aprovada` devem permanecer intactos. Sem merge.
