# Tab Switch on Tab

Extensão para Firefox/Zen que faz a tecla **Tab** (sem modificadores) trocar
para a próxima aba do navegador, mesmo com o foco dentro do conteúdo de uma
página normal. Ignora o atalho quando o foco está em um campo editável
(input, textarea, select ou contentEditable).

Como funciona: um content script roda dentro de cada página e intercepta o
Tab antes da própria página reagir a ele, e avisa o background script pra
trocar de aba.

## Teste rápido (temporário, some ao fechar o navegador)

1. Abra `about:debugging#/runtime/this-firefox`.
2. Clique em **Carregar extensão temporária**.
3. Selecione o arquivo `manifest.json` desta pasta.
4. Teste apertando Tab em qualquer página (fora de campos de texto).

## Instalação permanente

Segue o mesmo processo que você já usou para o Speed Dial: empacote a pasta
como `.xpi` (zip com extensão `.xpi`) e publique via auto-distribuição
(unlisted) na Mozilla (addons.mozilla.org), depois instale o `.xpi` gerado.
