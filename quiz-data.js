// Base completa de dados do Quiz "Plano Reconquista Absoluta"
// Dr. Carlos M. Nhantumbo - Psicólogo & Especialista em Relacionamentos
// Acolhimento psicológico profundo para CADA alternativa escolhida pelo lead

function getQuizSteps(gender = 'homem') {
  const isWoman = gender === 'mulher';

  // Termos dinâmicos
  const ex = isWoman ? 'o seu ex' : 'a sua ex';
  const eleEla = isWoman ? 'ele' : 'ela';
  const deleDela = isWoman ? 'dele' : 'dela';
  const neleNela = isWoman ? 'nele' : 'nela';
  const comEleComEla = isWoman ? 'com ele' : 'com ela';
  const outroOutra = isWoman ? 'outra' : 'outro';
  const homemMulherCerto = isWoman ? 'a mulher certa' : 'o homem certo';
  const prontoPronta = isWoman ? 'pronta' : 'pronto';
  const queridoQuerida = isWoman ? 'minha querida' : 'meu amigo';
  const bonus3Titulo = isWoman ? 'Manual da Mulher Magnética' : 'Manual do Homem Magnético';
  // CTA unificado para rastreamento de InitiateCheckout (Pixel / Tag Manager)
  const ctaFinal = '👉 SIM, QUERO ELE(A) DE VOLTA!';

  return [
    // PASSO 1: Boas-vindas e Gancho Inicial
    {
      id: 1,
      messages: [
        {
          type: 'text',
          content: 'Use os <u>"gatilhos da atração"</u> e <strong>reconquiste quem você ama rapidamente!</strong>\n\nClique abaixo, faça o <strong>teste grátis de 1 minuto</strong> e aprenda...'
        }
      ],
      options: [
        {
          text: '👉 COMEÇAR TESTE GRÁTIS',
          reaction: []
        }
      ]
    },

    // PASSO 2: Apresentação da Autoridade Humanizada
    {
      id: 2,
      messages: [
        {
          type: 'text',
          content: 'Olá! Sou o <strong>Dr. Carlos M. Nhantumbo</strong> — psicólogo especialista em comportamento humano e relacionamentos há mais de 15 anos.'
        },
        {
          type: 'text',
          content: 'Ao longo dos anos, já atendi e ajudei <strong>mais de 400 pessoas a resgatarem seus relacionamentos</strong>, mesmo quando parecia tudo perdido.\n\nPreciso te fazer algumas <strong>perguntas rápidas e confidenciais</strong> para analisar o seu caso com carinho e te dizer exatamente o que fazer.'
        }
      ],
      options: [
        {
          text: 'Continuar',
          reaction: []
        }
      ]
    },

    // PASSO 3: Gênero (Acolhimento imediato de acordo com a identidade)
    {
      id: 3,
      messages: [
        {
          type: 'text',
          content: 'Para começarmos com o diagnóstico correto, me diga: Qual o seu gênero?'
        }
      ],
      options: [
        {
          text: 'Sou homem',
          genderChoice: 'homem',
          reaction: [
            'Seja muito bem-vindo, meu amigo. Sei bem que para nós, homens, nem sempre é fácil falar sobre dor, término e sentimentos. Fique em paz: tudo o que conversarmos aqui é 100% confidencial. Estou ao seu lado para te ouvir e te ajudar a virar esse jogo.'
          ]
        },
        {
          text: 'Sou mulher',
          genderChoice: 'mulher',
          reaction: [
            'Seja muito bem-vinda, minha querida. Sei perfeitamente o quanto o coração aperta e a mente fica cheia de incertezas quando um relacionamento tão importante se rompe. Respire fundo: você está em um ambiente seguro e de acolhimento. Vou te guiar passo a passo.'
          ]
        }
      ]
    },

    // PASSO 4: Frequência do Pensamento
    {
      id: 4,
      messages: [
        {
          type: 'text',
          content: `Me responde com o coração sincero…\nVocê ainda pensa ${neleNela}?`
        }
      ],
      options: [
        {
          text: 'Todos os dias',
          reaction: [
            isWoman
              ? 'Compreendo profundamente, querida... Pensar nele todos os dias é muito doloroso e esgota as energias. Quando a mulher se entrega de verdade, o vínculo não desaparece do dia para a noite. Essa presença constante dele na sua mente é a prova do tamanho da conexão de vocês — e nós vamos usar essa mesma ligação para despertar o sentimento nele de novo.'
              : 'Entendi perfeitamente, meu amigo... Pensar nela todos os dias é o reflexo mais claro de que você viveu uma conexão de verdade. Essa dor no peito que não passa acontece porque seu cérebro ainda está preso na ausência dela. Mas não se desespere: isso prova que a história de vocês tem raízes fortes para reativar essa atração.'
          ]
        },
        {
          text: 'Às vezes',
          reaction: [
            isWoman
              ? 'É exatamente assim que funciona... Você tenta focar no trabalho, na sua rotina, mas em certos momentos do dia o vazio e a lembrança dele voltam forte. Isso mostra que, por trás da sua postura forte, ainda existe um carinho e uma pendência inacabada que precisa ser resolvida.'
              : 'Faz todo o sentido... Às vezes você até acha que está superando, mas de repente uma música, um lugar ou o silêncio da noite traz a lembrança dela à tona. Isso acontece porque a ferida não cicatrizou e o sentimento ainda está vivo dentro de você.'
          ]
        },
        {
          text: 'Tento evitar',
          reaction: [
            isWoman
              ? 'Entendo perfeitamente, querida... Tentar evitar pensar nele é uma tentativa natural de proteger o coração para não chorar ou sofrer. Mas reprimir o sentimento só faz a saudade acumular por dentro. Vamos trabalhar isso com inteligência emocional e método.'
              : 'Eu te entendo muito bem. Quando um homem tenta evitar pensar em alguém, é justamente porque a lembrança machuca demais. Tentar fugir do sentimento é uma armadura da mente. Não guarde esse peso só para você, estou aqui para te ajudar a lidar com isso da forma correta.'
          ]
        }
      ]
    },

    // PASSO 5: Tempo de Término
    {
      id: 5,
      messages: [
        {
          type: 'text',
          content: 'Há quanto tempo vocês terminaram?'
        }
      ],
      options: [
        {
          text: 'Menos de uma semana',
          reaction: [
            'Entendi… Então o término ainda está bem recente no seu caso.\n\nNesta fase as emoções estão à flor da pele de ambos os lados. E isso é excelente para nós: o vínculo emocional e as memórias de intimidade ainda estão totalmente frescos!'
          ]
        },
        {
          text: 'Cerca de um mês',
          reaction: [
            'Compreendo perfeitamente… Cerca de um mês é o momento exato em que a ficha começa a cair e a poeira inicial baixa.\n\nÉ a janela perfeita para começar a agir estrategicamente sem cometer erros por desespero.'
          ]
        },
        {
          text: '2-6 meses',
          reaction: [
            'Entendi… Mesmo depois de alguns meses, se você ainda sente essa conexão bater forte no peito, é porque a história de vocês marcou de verdade.\n\nA fase da raiva inicial já passou, o que abre espaço limpo para a curiosidade e o arrependimento serem ativados.'
          ]
        },
        {
          text: 'Mais de 6 meses',
          reaction: [
            'Sei como é… Passar mais de 6 meses e ainda sentir esse laço vivo mostra a força do que existiu entre vocês.\n\nO tempo limpa as mágoas do passado e, com os gatilhos certos, é muito mais fácil reacender aquela paixão inicial que fez vocês se apaixonarem.'
          ]
        }
      ]
    },

    // PASSO 6: Decisão do Término (Acolhimento específico para cada decisão)
    {
      id: 6,
      messages: [
        {
          type: 'text',
          content: 'Quem tomou a decisão do término?'
        }
      ],
      options: [
        {
          text: isWoman ? 'Ele terminou comigo' : 'Ela terminou comigo',
          reaction: [
            isWoman
              ? 'Eu sinto a sua dor, querida... Ouvir do homem que a gente ama que ele quer terminar despedaça a nossa segurança. Muitas vezes ele termina porque se sentiu confuso ou sob pressão. Mas a boa notícia psicológica é: homens costumam sentir o impacto real da perda algumas semanas depois, e nós vamos fazê-lo perceber o que perdeu.'
              : 'Sei o quanto ser pego de surpresa e ver a decisão vindo dela machuca o orgulho e o coração de um homem. A sensação de impotência é terrível. Mas quero que saiba: na maioria esmagadora das vezes a mulher termina por saturação emocional momentânea, não porque o amor evaporou. Isso é plenamente reversível.'
          ]
        },
        {
          text: isWoman ? 'Eu terminei com ele' : 'Eu terminei com ela',
          reaction: [
            isWoman
              ? 'Te entendo perfeitamente... Muitas mulheres terminam esperando que o homem reaja ou lute pela relação, mas ele acaba se fechando com orgulho. O arrependimento de ter tomado a iniciativa é comum, mas tem solução rápida quando agimos com psicologia inversa sem você precisar se humilhar.'
              : 'Compreendo, meu amigo... Às vezes na hora da raiva ou do estresse a gente toma uma decisão no calor do momento e depois a ficha cai. O arrependimento pesa. O segredo agora não é correr atrás pedindo desculpas de joelhos, mas sim demonstrar valor e reposicionamento.'
          ]
        },
        {
          text: 'Foi uma decisão mútua',
          reaction: [
            'Entendi... Decisões mútuas costumam acontecer quando o casal chega num desgaste e nenhum dos dois sabe como destravar a relação. Mas quando existe maturidade e amor, basta um dos dois aprender as chaves certas de atração para reconstruir a união com muito mais maturidade.'
          ]
        }
      ]
    },

    // PASSO 7: Comportamento Pós-Término
    {
      id: 7,
      messages: [
        {
          type: 'text',
          content: 'Depois do término, você chegou a correr atrás?'
        }
      ],
      options: [
        {
          text: 'Sim, várias vezes',
          reaction: [
            isWoman
              ? 'Querida, não se culpe por ter feito isso. Mandar mensagem, ligar ou desabafar é a atitude de alguém que realmente se importa. Porém, para a mente masculina, a insistência gera pressão e faz ele ativar o <strong>“bloqueio defensivo”</strong>. Quanto mais você cobra, mais ele recua. Não se preocupe: vamos estancar isso agora e fazer o jogo virar.'
              : 'Eu te entendo totalmente, meu amigo. A reação instintiva do homem apaixonado é ligar, mandar mensagens e tentar explicar a qualquer custo. Porém, o cérebro feminino nessa fase entra em <strong>“bloqueio emocional defensivo”</strong>. Quanto mais você insiste, mais ela se afasta. Não se culpe por ter tentado, mas agora vamos aplicar a postura correta para ela sentir sua falta.'
          ]
        },
        {
          text: 'Tentei, mas não deu certo',
          reaction: [
            'É absolutamente normal que não tenha dado certo, porque você estava tentando usar a razão contra uma barreira de defesa emocional. Quando a pessoa está fechada, promessas e pedidos de desculpas não funcionam. O que funciona são estímulos emocionais inconscientes que reativam a atração natural.'
          ]
        },
        {
          text: 'Não fiz nada',
          reaction: [
            'Parabéns pelo autocontrole! Você evitou se humilhar e não desgastou ainda mais a imagem de vocês. Porém, ficar em silêncio por tempo demais sem uma estratégia ativa pode fazer a pessoa achar que você já não se importa. Agora é o momento exato de entrar com os gatilhos certos.'
          ]
        }
      ]
    },

    // PASSO 8: Transição
    {
      id: 8,
      messages: [],
      options: [
        {
          text: 'Continuar',
          reaction: []
        }
      ]
    },

    // PASSO 9: O Maior Medo / Preocupação
    {
      id: 9,
      messages: [
        {
          type: 'text',
          content: 'O que mais te preocupa hoje, nessa situação?'
        }
      ],
      options: [
        {
          text: `${isWoman ? 'Ele' : 'Ela'} esquecer de mim`,
          reaction: [
            isWoman
              ? 'Eu sei o quanto esse pensamento tira o seu sono. O medo de que ele se acostume com a sua ausência dói na alma. Mas com os gatilhos da atração que vou te passar, a sua ausência vai começar a gerar curiosidade e saudade, não esquecimento.'
              : 'Eu sei o quanto isso destrói o psicológico de um homem por dentro. Quando a mulher começa a associar paz à ausência do ex, a conexão esfria aos poucos. Mas com os gatilhos certos, nós quebramos esse padrão e fazemos ela lembrar dos seus melhores momentos.'
          ]
        },
        {
          text: `${isWoman ? 'Ele se envolver com outra' : 'Ela se envolver com outro'}`,
          reaction: [
            isWoman
              ? 'Imaginar ele com outra mulher é uma dor física, eu sei... Esse medo surge quando você sente que perdeu o seu lugar no coração dele. Mas relacionamentos rebote rápidos quase sempre servem apenas para tampar buraco emocional. Com os gatilhos certos, ele vai perceber que nenhuma outra chega aos seus pés.'
              : 'Imaginar ela com outro homem quebra as pernas de qualquer homem honrado. Esse medo acontece quando você sente que perdeu espaço na mente dela. Mas fique tranquilo: conexões superficiais não apagam a história que vocês construíram. Vamos recuperar esse espaço rapidamente.'
          ]
        },
        {
          text: `${isWoman ? 'Ele' : 'Ela'} não sentir o que sentia antes`,
          reaction: [
            `Esse medo é legítimo... Mas sentimentos não morrem, eles apenas ficam adormecidos debaixo de mágoas e cansaço. Quando você aplica os gatilhos da atração, essa chama adormecida acende com a mesma intensidade do início do namoro.`
          ]
        },
        {
          text: `Perder ${eleEla} definitivamente`,
          reaction: [
            `A sensação de que a pessoa que você ama pode sumir para sempre da sua vida é angustiante. Mas enquanto houver sentimento e a estratégia certa for aplicada, nada está perdido. Estou aqui para garantir que você não perca essa oportunidade.`
          ]
        }
      ]
    },

    // PASSO 10: Transição
    {
      id: 10,
      messages: [],
      options: [
        {
          text: 'Continuar',
          reaction: []
        }
      ]
    },

    // PASSO 11: Reação Atual
    {
      id: 11,
      messages: [
        {
          type: 'text',
          content: `Como ${eleEla} reage hoje com você?`
        }
      ],
      options: [
        {
          text: 'Me ignora',
          reaction: [
            isWoman
              ? 'Entendi… Quando o homem ignora, na maioria das vezes não é ódio, é fuga emocional. Ele não quer lidar com conversas difíceis e se fecha na caverna dele. Nós temos a chave certa para fazer ele sair dessa defensiva.'
              : 'Entendi… Quando a mulher começa a ignorar, normalmente é para sustentar distância emocional e não reabrir feridas. Ela está se protegendo. Mas quando a abordagem muda, a curiosidade dela fala mais alto.'
          ]
        },
        {
          text: 'Responde frio',
          reaction: [
            isWoman
              ? 'Ok… Quando ele responde de forma fria e curta, é uma carapaça protetora. Ele quer parecer forte e desapegado, mas o fato de ainda responder mostra que a porta está destrancada.'
              : 'Ok… Quando ela responde frio com monossílabos, significa que o vínculo ainda existe, mas ela está tentando manter a razão acima da emoção. Nós vamos mexer exatamente na emoção dela.'
          ]
        },
        {
          text: 'Ainda conversamos',
          reaction: [
            'Isso é um sinal poderosíssimo! Se vocês ainda mantêm contato, a conexão de vocês está viva. É o melhor cenário possível: basta mudar pequenos padrões na conversa para a atração explodir de novo.'
          ]
        },
        {
          text: 'Me bloqueou',
          reaction: [
            isWoman
              ? 'Não se desespere por causa do bloqueio! Bloqueio de homem quase sempre é um ato impulsivo de orgulho para não ver o que você faz. Isso mostra que ele se importa tanto que precisou te bloquear para não fraquejar. É reversível.'
              : 'Não entre em pânico pelo bloqueio! A mulher bloqueia quando a emoção está transbordando e ela precisa forçar um freio. Mas à medida que a curiosidade bate e a postura certa é adotada, o desbloqueio vem naturalmente.'
          ]
        }
      ]
    },

    // PASSO 12: Aceitaria Voltar? (Acolhimento para cada resposta)
    {
      id: 12,
      messages: [
        {
          type: 'text',
          content: `Se ${eleEla} voltasse hoje… você aceitaria?`
        }
      ],
      options: [
        {
          text: 'Com certeza, na hora',
          reaction: [
            `Essa sua lealdade e certeza mostram o quanto o seu amor é puro e verdadeiro. Mas atenção: ${eleEla} não pode sentir esse desespero de volta imediata, senão perde o valor. Vou te ensinar a acolher de volta com postura magnética e firme.`
          ]
        },
        {
          text: 'Sim, mas com condições',
          reaction: [
            'Perfeito! Essa é a mentalidade de quem tem amor-próprio e inteligência emocional. Voltar para cometer os mesmos erros não resolve nada. O nosso plano é reconstruir uma relação nova, saudável, onde você é profundamente valorizado(a).'
          ]
        }
      ]
    },

    // PASSO 13: Intensidade do Desejo
    {
      id: 13,
      messages: [
        {
          type: 'text',
          content: `Em uma escala de 1 a 3: o quanto você realmente quer ${eleEla} de volta?`
        }
      ],
      options: [
        {
          text: '1 (pouco)',
          reaction: [
            `Mesmo que você ainda tenha dúvidas, quando os gatilhos da atração são ativados, a admiração volta e o relacionamento floresce com muito mais leveza.`
          ]
        },
        {
          text: '2 (médio)',
          reaction: [
            `Entendi. Você quer, mas quer com segurança para não se machucar de novo. É exatamente essa proteção e direcionamento que eu vou te entregar.`
          ]
        },
        {
          text: '3 (quero muito)',
          reaction: [
            `Excelente! Essa sua determinação é o combustível fundamental. Quando a vontade de fazer dar certo se junta com o método comprovado, o resultado é extraordinário.`
          ]
        }
      ]
    },

    // PASSO 14: Transição
    {
      id: 14,
      messages: [],
      options: [
        {
          text: 'Continuar',
          reaction: []
        }
      ]
    },

    // PASSO 15: Conclusão da Análise & Acolhimento
    {
      id: 15,
      messages: [
        {
          type: 'text',
          content: `⚠️ <strong>Análise concluída, ${queridoQuerida}.</strong>\n\nAnalisei com atenção cada detalhe das suas respostas e o padrão do seu caso ficou muito claro na minha mesa.`
        },
        {
          type: 'text',
          content: isWoman
            ? 'O problema central não é o término em si... É que atitudes tomadas no calor do momento acabaram criando um <strong>afastamento defensivo</strong> na mente dele.\n\nE é exatamente por isso que muitas mulheres sofrem: tentam mandar textões, cobrar explicações ou insistir, e sem querer acabam empurrando ele ainda mais para longe.'
            : 'O problema central não é o término em si... É que atitudes tomadas no desespero acabaram gerando um <strong>bloqueio emocional defensivo</strong> na mente dela.\n\nE é por isso que a maioria dos homens falha: tentam correr atrás, prometer mudanças da boca para fora ou insistir, e acabam afastando ela ainda mais.'
        },
        {
          type: 'text',
          content: `A excelente notícia?\n\nEsse bloqueio <strong>ainda pode ser totalmente quebrado no seu caso</strong>. Você tem chances reais e concretas de reconquistar ${eleEla}!\n\nAtivando os <strong>Gatilhos da Atração Inconsciente</strong>, que reacendem as emoções positivas e o desejo que ${eleEla} sentia por você no início do relacionamento.`
        },
        {
          type: 'text',
          content: `Por isso, preparei a solução personalizada ideal para você:\n\n🔥 <strong>Plano Reconquista Absoluta</strong>\n\nUm método prático e diário de 14 dias, onde te pego pela mão e te ensino a ativar os gatilhos da atração ${neleNela}.\n\nVocê vai saber exatamente o que falar, como agir e como fazer ${eleEla} querer voltar por vontade própria!`
        },
        {
          type: 'text',
          content: 'E o melhor de tudo: sem precisar se humilhar, sem implorar e sem joguinhos infantis.'
        }
      ],
      options: [
        {
          text: 'Continuar',
          reaction: []
        }
      ]
    },

    // PASSO 16: Benefícios
    {
      id: 16,
      messages: [
        {
          type: 'text',
          content: `Veja o que vai acontecer nos próximos dias com o Plano Reconquista Absoluta:\n\n✅ Fazer ${eleEla} sentir a sua falta dia e noite\n\n✅ Reativar a atração física e emocional ${deleDela} por você\n\n✅ Fazer ${eleEla} voltar a pensar em você involuntariamente\n\n✅ Fazer ${eleEla} tomar a iniciativa de te procurar no WhatsApp\n\n✅ Recuperar o respeito e admiração ${deleDela}\n\n✅ Fazer ${eleEla} se arrepender da decisão do término\n\n✅ Fazer ${eleEla} pedir para voltar naturalmente`
        }
      ],
      options: [
        {
          text: 'Continuar',
          reaction: []
        }
      ]
    },

    // PASSO 17: Prova Social & Depoimentos
    {
      id: 17,
      messages: [
        {
          type: 'text',
          content: `<strong>94% dos alunos</strong> que estavam exatamente na mesma situação que você...\n\nseguiram o Plano Reconquista Absoluta e <strong>reconquistaram ${ex} em menos de 14 dias!</strong>`
        },
        {
          type: 'image',
          url: 'assets/images/depoimento_2.jpg'
        },
        {
          type: 'image',
          url: 'assets/images/depoimento_3.jpg'
        },
        {
          type: 'text',
          content: 'Como você pode ver nos relatos reais dos meus alunos... Quem aplica os Gatilhos da Atração colhe resultados logo nos primeiros dias.\n\nEles pararam de insistir e correr atrás... e fizeram a outra pessoa vir até eles cheia de saudade.'
        }
      ],
      options: [
        {
          text: 'Sim, eu quero esses resultados!',
          reaction: []
        }
      ]
    },

    // PASSO 18: Linha do Tempo Personalizada
    {
      id: 18,
      messages: [
        {
          type: 'text',
          content: 'Excelente decisão! Parabéns pela sua postura em buscar orientação profissional.'
        },
        {
          type: 'text',
          content: 'O seu <strong>plano personalizado de 14 dias está pronto</strong>! De acordo com as respostas do seu diagnóstico, este será o cronograma dos seus resultados:'
        },
        {
          type: 'text',
          content: `🔴 <strong>Hoje:</strong>\n${isWoman ? 'Ele parece frio e distante' : 'Ela não vê futuro juntos'}`
        },
        {
          type: 'text',
          content: `🟠 <strong>Em 4 dias:</strong>\nComeça a lembrar dos momentos bons e pensar em você`
        },
        {
          type: 'text',
          content: `🟡 <strong>Em 9 dias:</strong>\nSente saudade, falta do seu cheiro e atração por você novamente`
        },
        {
          type: 'text',
          content: `🟢 <strong>Em 14 dias:</strong>\n${isWoman ? 'Ele se arrepende do término, percebe que você é a mulher certa, e quer voltar naturalmente' : 'Ela se arrepende do término, percebe que você é o homem certo, e quer voltar naturalmente'}`
        },
        {
          type: 'text',
          content: `Você está ${prontoPronta} para reconquistá-${eleEla}?`
        }
      ],
      options: [
        {
          text: `Sim, eu quero reconquistar ${eleEla}!`,
          reaction: []
        }
      ]
    },

    // PASSO 19: O que está incluso & Entregáveis
    {
      id: 19,
      messages: [
        {
          type: 'text',
          content: `📋 <strong>O QUE VOCÊ RECEBE HOJE:</strong>\n\n✅ Plano Reconquista Absoluta de 14 dias\n\n✅ Método passo a passo para ativar os gatilhos da atração\n\n✅ Roteiros de mensagens testadas e validadas para enviar\n\n✅ Como recuperar o interesse ${deleDela} sem se humilhar\n\n✅ Como agir caso ${eleEla} responda com frieza\n\n✅ Como blindar o relacionamento para nunca mais terminarem\n\n✅ Acesso imediato no celular pelo WhatsApp\n\n✅ Suporte e tira-dúvidas exclusivo\n\n✅ Acesso vitalício para sempre`
        },
        {
          type: 'image',
          url: 'assets/images/mockup_produto.jpg'
        },
        {
          type: 'text',
          content: 'Você poderá <strong>acessar seu plano diretamente no celular</strong>, computador ou tablet, de forma 100% discreta e sigilosa.'
        },
        {
          type: 'text',
          content: '✅ Milhares de casais já foram restaurados com esse método!'
        }
      ],
      options: [
        {
          text: 'Quero meu plano de reconquista!',
          reaction: []
        }
      ]
    },

    // PASSO 20: 3 Bônus Exclusivos + Preço Promocional em Meticais + Garantia 30 Dias + CTA
    {
      id: 20,
      messages: [
        {
          type: 'text',
          content: 'E para garantir que nada dê errado no seu caso...\n\nVou liberar mais <strong>3 Super Bônus Exclusivos Gratuitos</strong> para você hoje:'
        },
        {
          type: 'text',
          content: `🎁 <strong>#BÔNUS 1</strong> — Guia dos 7 Erros Que Fazem ${isWoman ? 'Ele' : 'Ela'} Se Afastar Ainda Mais\n\nDescubra os principais comportamentos que sabotam a reconquista e como evitá-los.\n\nDe <strike>250 Meticais</strike> por: <strong>GRÁTIS</strong>`
        },
        {
          type: 'text',
          content: `🎁 <strong>#BÔNUS 2</strong> — Como Ler os Sinais de Interesse ${isWoman ? 'Dele' : 'Dela'}\n\nIdentifique quando seu ex está pronto para voltar e o momento exato de marcar um reencontro.\n\nDe <strike>350 Meticais</strike> por: <strong>GRÁTIS</strong>`
        },
        {
          type: 'text',
          content: `🎁 <strong>#BÔNUS 3</strong> — ${bonus3Titulo}\n\nAumente o seu magnetismo pessoal e confiança para ${eleEla} ficar louco(a) de desejo por você.\n\nDe <strike>300 Meticais</strike> por: <strong>GRÁTIS</strong>`
        },
        {
          type: 'text',
          content: `<strong>RESUMO DE TUDO O QUE VOCÊ LEVA:</strong>\n\n✅ Plano Reconquista Absoluta de 14 dias\n✅ Ações diárias simples e comprovadas\n\n✅ Guia dos 7 Erros Fatais\n✅ Como Ler os Sinais de Interesse\n✅ ${bonus3Titulo}\n✅ Acesso Imediato no WhatsApp\n✅ Acesso Vitalício ao Método`
        },
        {
          type: 'text',
          content: 'Valor normal de tudo somado: <strike>1.500 Meticais</strike>\n\nHOJE por <strong>apenas</strong>: <span style="font-size:1.3em;color:#00a884;font-weight:bold;">197 Meticais</span>'
        },
        {
          type: 'text',
          content: 'Sim, menos do que o valor de um lanche na rua.\n\nComo meu compromisso profissional é salvar relacionamentos...\n\n🔥 Hoje eu liberei apenas <strong>5 vagas promocionais</strong> por esse valor simbólico! ⏰'
        },
        {
          type: 'text',
          content: '✅ E você conta com <strong>30 dias de Garantia Incondicional Blindada</strong>.\n\nSe por qualquer razão você achar que o método não é para você, basta me enviar uma mensagem que <strong>devolvo 100% do seu dinheiro.</strong>\n\nSem perguntas e sem burocracia. O risco é todo meu. <strong>Seu risco é ZERO.</strong>'
        },
        {
          type: 'text',
          content: `Se você realmente quer ${eleEla} de volta na sua vida...\n\nClique no botão verde abaixo agora e garanta a sua vaga no Plano Reconquista Absoluta com todos os bônus inclusos! 👇`
        }
      ],
      options: [
        {
          text: ctaFinal,
          isCheckout: true
        }
      ]
    }
  ];
}

const QUIZ_STEPS = getQuizSteps('homem');

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { getQuizSteps, QUIZ_STEPS };
}
