# Diamante Rosa — masters locais / Build 03D

Base visual preservada: `6d84799d2c93838e38056df6df7eaed6680a624b`.
Masters recuperados integralmente do commit `5162cb541e2bf812db99a7f8b549e5f30554588b`, sem regenerar ou modificar as fotografias.

## Causa corrigida

A base recuperada não continha os masters da outra linha de commits e voltava a usar `photo(number)`. Na verificação do preview, as nove URLs numeradas usadas pela página devolviam a mesma fotografia de fachada, inclusive com o mesmo SHA-256. As chaves de Experiência e Ritual, as props dos componentes e o `next/image` estavam associados corretamente; não havia fallback para a fachada. O problema era a origem externa das imagens.

## Mapeamento final

Todos os caminhos abaixo são relativos a `/assets/diamante-rosa/master/`.

| Seção / momento | Master |
| --- | --- |
| Hero | `facade.webp` |
| Experiência / Receber bem | `atrium.webp` |
| Experiência / Descansar de verdade | `room.webp` |
| Experiência / Começar bem o dia | `breakfast.webp` |
| Experiência / Sentir que escolheu certo | `lake.webp` |
| Carrossel / Suíte Casal | `suite.webp` |
| Carrossel / Outra configuração de hospedagem | `room.webp` |
| Carrossel / Detalhes da acomodação | `jacuzzi.webp` |
| Ritual / Chegar | `facade.webp` |
| Ritual / Respirar | `atrium.webp` |
| Ritual / Descansar | `room.webp` |
| Ritual / Despertar | `breakfast.webp` |
| Ritual / Continuar | `lake.webp` |
| Café / principal | `breakfast.webp` |
| Café / detalhe | `breakfast.webp`, recorte em `82% center` |
| Estrutura / protagonista | `auditorium.webp` |
| Localização / lagoa e entorno | `lake.webp` |
| Localização / hotel no contexto | `facade.webp`, enquadramento amplo do exterior |
| CTA final | Sem fotografia |

## Limitações reais do conjunto

- Não existe master gastronômico complementar: `breakfastDetail` reutiliza intencionalmente o buffet com outro recorte.
- Não existe uma segunda fotografia aérea/contextual do hotel: o bloco de apoio de Localização usa a fachada local, que mostra o exterior e a entrada; a lagoa usa seu próprio master. Não apresentar esse apoio como vista aérea.
- `room.webp` e `suite.webp` são arquivos distintos, mas mostram enquadramentos próximos de uma composição com cama de casal e cama de solteiro. A segunda opção mantém um nome neutro; não inventar uma categoria de quarto.
- Jacuzzi é detalhe da hospedagem, não categoria de quarto.

Não usar hotlinks, placeholders ou fallbacks para a fachada. Hero e Experiência mantêm a estrutura e os recortes da base recuperada.
