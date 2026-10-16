# 📱 Clone do Quiz de Vendas - Plano Reconquista Absoluta

Uma clonagem completa, autônoma, ultra-rápida e otimizada da página de vendas em formato de conversa interativa do WhatsApp com o **Dr. Carlos**.

---

## 🚀 Status da Conexão
- **Repositório Conectado:** [https://github.com/savide242-bot/quiz-ex](https://github.com/savide242-bot/quiz-ex)
- **Sincronização em Tempo Real:** 🟢 Ativa (Qualquer alteração salva vai direto para o GitHub automaticamente)

---

## 🚀 Como Executar
1. Basta abrir o arquivo [`index.html`](file:///c:/Users/Lenovo/antigravity%20arquivo/Quiz%20Ex/index.html) em qualquer navegador web, ou subir a pasta inteira para qualquer hospedagem (Vercel, Netlify, Cloudflare Pages, Hostinger, cPanel, Apache, Nginx, etc.).
2. Não requer servidor backend, banco de dados ou dependências de terceiros; tudo funciona de forma 100% autônoma e offline.

---

## ⚙️ Onde Configurar seus Novos Links (Checkout & UTMs)
Abra o arquivo [`config.js`](file:///c:/Users/Lenovo/antigravity%20arquivo/Quiz%20Ex/config.js) e preencha:

```javascript
const APP_CONFIG = {
  // 1. Cole aqui o seu NOVO link de checkout (Kiwify, Hotmart, Payt, etc.):
  checkoutUrl: "https://seu-link-de-checkout-aqui...",

  // 2. Opcional: Link para onde redirecionar caso a pessoa tente voltar no navegador:
  backRedirectUrl: "",

  // 3. Opcional: Seu ID de Pixel do Facebook/Meta:
  pixelId: "",

  // 4. Repassar automaticamente as suas novas UTMs (utm_source, campaign, fbclid, etc.):
  forwardUtmParams: true,

  // 5. Configurações visuais:
  enableAudio: true,        // Som de mensagem do WhatsApp
  typingDelayMs: 650,       // Velocidade da digitação simulada
  doctorName: "Dr. Carlos"  // Nome do especialista
};
```

> **Aviso de Limpeza:** Todos os códigos e links de checkout antigos (`payt.com.br`) e scripts de rastreamento antigos (`utmify.com.br`) foram **completamente removidos**.

---

## 🧠 Mapeamento Completo do Quiz: Perguntas, Respostas e Reações

Abaixo está o fluxo extraído diretamente da árvore de conversa:

### 1. Boas-vindas
* **Mensagem:** "Use os 'gatilhos da atração' e reconquiste sua ex rapidamente! Clique abaixo, faça o teste grátis de 1 minuto e aprenda..."
* **Opção:** `👉 COMEÇAR TESTE GRÁTIS`

### 2. Apresentação da Autoridade
* **Mensagem:** "Olá, sou o Dr. Carlos - especialista em psicologia de relacionamentos há mais de 15 anos. Já ajudei mais de 7.600 homens a reconquistarem suas ex com esse método. Me responda algumas perguntas rápidas para eu entender seu caso e poder lhe ensinar também!"
* **Opção:** `Continuar`

### 3. Gênero (Adaptação Inteligente da Linguagem)
* **Mensagem:** "Para começar, me diga: Qual o seu gênero?"
* **Opções:**
  * `Sou homem` ➔ Ativa a versão masculina para reconquistar **a ex / ela** (perguntas: *"Você ainda pensa nela?"*, *"Ela terminou comigo"*, *"Ela esquecer de mim"*, *"Ela se envolver com outro"*, *"Como ela reage hoje?"*, bônus *"Manual do Homem Magnético"*, botão final *"SIM, QUERO ELA DE VOLTA!"*).
  * `Sou mulher` ➔ Ativa a versão feminina para reconquistar **o ex / ele** (perguntas: *"Você ainda pensa nele?"*, *"Ele terminou comigo"*, *"Ele esquecer de mim"*, *"Ele se envolver com outra"*, *"Como ele reage hoje?"*, bônus *"Manual da Mulher Magnética"*, botão final *"SIM, QUERO ELE DE VOLTA!"*).

### 4. Frequência do Pensamento
* **Mensagem:** "Me responde com sinceridade… Você ainda pensa nela?"
* **Opções & O que o Quiz diz depois de cada resposta:**
  * **Todos os dias:** *"Entendi… Pensar nela todos os dias é mais comum do que você imagina depois de uma conexão emocional."*
  * **Às vezes:** *"Normal… Algumas situações acabam trazendo a pessoa de volta na mente às vezes, sem perceber."*
  * **Tento evitar:** *"Quando alguém tenta evitar pensar… geralmente é porque ainda mexe emocionalmente."*

### 5. Tempo de Término
* **Mensagem:** "Há quanto tempo vocês terminaram?"
* **Opções & O que o Quiz diz depois de cada resposta:**
  * **Menos de uma semana:** *"Entendi… Então o término ainda está bem recente no seu caso. E isso é ótimo!"*
  * **Cerca de um mês:** *"Entendi… Então o término ainda está bem recente no seu caso. E isso é ótimo!"*
  * **2-6 meses:** *"Entendi… Mesmo depois desse tempo todo, dá pra perceber que essa conexão ainda mexe com você. E isso é bom!"*
  * **Mais de 6 meses:** *"Entendi… Mesmo depois desse tempo todo, dá pra perceber que essa conexão ainda mexe com você. E isso é bom!"*

### 6. Decisão do Término
* **Mensagem:** "Quem tomou a decisão do término?"
* **Opções:**
  * `Ela terminou comigo`
  * `Eu terminei com ela`
  * `Foi uma decisão mútua`

### 7. Comportamento Pós-Término
* **Mensagem:** "Depois do término, você chegou a correr atrás?"
* **Opções & O que o Quiz diz depois de cada resposta:**
  * **Sim, várias vezes / Tentei, mas não deu certo:** *"O que quase ninguém percebe… é que depois do término, o cérebro feminino entra num estado chamado: 'bloqueio emocional defensivo'. E quanto mais você corre atrás… mais esse bloqueio aumenta. A maioria dos homens erra feio… e acaba afastando ela ainda mais, sem perceber. Mas 8 em cada 10 homens notam mudanças já nos primeiros dias quando aprendem a ativar os gatilhos da atração..."*
  * **Não fiz nada:** *"A maioria dos homens erra feio por não fazer nada… e pode acabar afastando ela ainda mais sem perceber. Mas 8 em cada 10 homens notam mudanças já nos primeiros dias quando aprendem a ativar os gatilhos da atração..."*

### 8. Maior Medo / Preocupação
* **Mensagem:** "O que mais te preocupa hoje, nessa situação?"
* **Opções & O que o Quiz diz depois de cada resposta:**
  * **Ela esquecer de mim:** *"Eu sei o quanto isso destrói o psicológico de um homem por dentro. Quando a mulher começa a associar paz emocional à ausência do ex… a conexão vai esfriando aos poucos. Mas com os gatilhos certos, isso pode ser revertido. E ela não vai esquecer de você."*
  * **Ela se envolver com outro:** *"Eu sei o quanto isso destrói o psicológico de um homem por dentro. Esse medo dela se envolver com outro acontece quando o homem sente que perdeu espaço emocional na mente dela. Mas com os gatilhos certos, rapidamente você recupera esse espaço."*
  * **Ela não sentir o que sentia antes:** *"Eu sei o quanto isso destrói o psicológico de um homem por dentro... Mas com os gatilhos certos, ela volta a sentir tudo, como no início."*
  * **Perder ela definitivamente:** *"Eu sei o quanto isso destrói o psicológico de um homem por dentro. Mas, ativando os gatilhos certos, você não perderá essa mulher."*

### 9. Reação Atual da Ex
* **Mensagem:** "Como ela reage hoje?"
* **Opções & O que o Quiz diz depois de cada resposta:**
  * **Me ignora:** *"Entendi… Quando ela começa a ignorar, normalmente é porque está tentando sustentar distância emocional pra não reabrir sentimentos."*
  * **Responde frio:** *"Ok… Quando ela responde frio, geralmente significa que o vínculo emocional ainda existe… mas ela está tentando esconder isso racionalmente."*
  * **Ainda conversamos:** *"Isso é um sinal importante… Porque quando vocês ainda conversam, normalmente a conexão emocional entre vocês ainda não foi completamente quebrada."*
  * **Me bloqueou:** *"Entendi… Quando ela bloqueia, normalmente é porque o bloqueio emocional virou um mecanismo de defesa muito forte. Mas isso ainda pode ser revertido no seu caso."*

### 10. Disposição para Reconciliação
* **Mensagem:** "Se ela voltasse hoje… você aceitaria?"
* **Opções:**
  * `Com certeza, na hora`
  * `Sim, mas com condições`

### 11. Nível de Desejo
* **Mensagem:** "O quanto você quer ela de volta?"
* **Opções:** `1 (pouco)`, `2 (médio)`, `3 (quero muito)`
* **Reação:** *"Quando você reativa os gatilhos certos… ela começa a pensar em você o tempo todo — e a vontade de voltar vem forte."*

### 12. Conclusão do Diagnóstico & Apresentação da Oferta
* Análise concluída destacando o "bloqueio emocional defensivo" e a solução: **Plano Reconquista Absoluta de 14 dias**.
* Apresentação dos 7 benefícios principais com checks.
* Prova social: 94% de sucesso + galeria com 3 prints reais de conversas do WhatsApp de alunos recuperando suas parceiras.
* Linha do tempo visual personalizada:
  * 🔴 **Hoje:** Ela não vê futuro juntos
  * 🟠 **Em 4 dias:** Começa a pensar em você
  * 🟡 **Em 9 dias:** Sente sua falta e atração por você novamente
  * 🟢 **Em 14 dias:** Ela se arrepende do término, percebe que você é o homem certo, e quer voltar naturalmente
* Mockup 3D dos entregáveis + acesso imediato por WhatsApp.
* **4 Super Bônus Gratuitos:**
  1. Guia dos 7 Erros Que Fazem Ela Se Afastar Ainda Mais (De 250 Meticais por GRÁTIS)
  2. Como Ler os Sinais de Interesse Dela (De 350 Meticais por GRÁTIS)
  3. Manual do Homem Magnético (De 300 Meticais por GRÁTIS)
  4. Aplicativo Personalizado Vitalício (De 600 Meticais por GRÁTIS)
* Ancoragem de preço: De **1.500 Meticais** por apenas **197 Meticais**.
* Escassez: "Apenas 5 vagas promocionais liberadas hoje".
* Garantia incondicional blindada de 30 dias (100% de reembolso).
* Botão final com chamada para ação e redirecionamento direto para o seu checkout (`https://pay.lojou.app/u7vCR`).

---

## 📁 Estrutura de Arquivos
- [`index.html`](file:///c:/Users/Lenovo/antigravity%20arquivo/Quiz%20Ex/index.html): Estrutura da aplicação web.
- [`style.css`](file:///c:/Users/Lenovo/antigravity%20arquivo/Quiz%20Ex/style.css): Estilos do WhatsApp Mobile/Web e botões pulsantes.
- [`quiz-data.js`](file:///c:/Users/Lenovo/antigravity%20arquivo/Quiz%20Ex/quiz-data.js): Base de dados completa com as 22 etapas e todas as reações.
- [`app.js`](file:///c:/Users/Lenovo/antigravity%20arquivo/Quiz%20Ex/app.js): Motor de interação, simulação de digitação, áudio e redirecionamento.
- [`config.js`](file:///c:/Users/Lenovo/antigravity%20arquivo/Quiz%20Ex/config.js): Configuração rápida do link de checkout e UTMs.
- `assets/images/`: Imagens originais em alta resolução baixadas localmente (avatar do Dr. Carlos, depoimentos e mockups).
- `assets/audio/`: Som autêntico de notificação de mensagem do WhatsApp.
