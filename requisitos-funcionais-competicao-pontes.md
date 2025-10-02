# Requisitos Funcionais - Sistema de Competição de Pontes de Palito

## 1. Introdução

Este documento apresenta os requisitos funcionais para o sistema "CompeticaoPontes", uma aplicação web desenvolvida em React para gerenciar competições de pontes de palito de picolé. O sistema é voltado para eventos acadêmicos e científicos onde equipes constroem pontes utilizando palitos de picolé e cola, sendo submetidas a testes de carga destrutivos.

## 2. Visão Geral do Sistema

O sistema CompeticaoPontes é uma interface de monitoramento em tempo real para competições de pontes de palito, fornecendo visualização de dados de carregamento, controle de tempo e acompanhamento de recordes durante os testes destrutivos das estruturas.

## 3. Requisitos Funcionais

### RF01 - Exibição de Dados de Carregamento

**Descrição:** O sistema deve exibir informações sobre carregamento em uma interface visual organizada em linhas.

**Critérios de Aceitação:**
- Exibir linhas com informações de peso atual (ex: "12KG")
- Destacar visualmente linhas com tipos especiais (RECORD, RECORD DAY, PROXIMA CARGA, CARGA ATUAL)
- Mostrar valores de recordes quando aplicável (ex: "215KG", "200KG")
- Permitir visualização de múltiplas linhas simultaneamente
- Renderizar linhas vazias quando não há dados específicos

### RF02 - Gerenciamento de Dados de Equipe

**Descrição:** O sistema deve exibir e gerenciar informações da equipe participante da competição.

**Critérios de Aceitação:**
- Exibir nome da equipe participante
- Mostrar peso atual da ponte
- Exibir carga estimada de colapso
- Mostrar próxima carga a ser aplicada
- Atualizar dados dinamicamente via API externa
- Tratar estados de carregamento ("Carregando" durante busca de dados)

### RF03 - Sistema de Contagem Regressiva

**Descrição:** O sistema deve fornecer um mecanismo de contagem regressiva controlável.

**Critérios de Aceitação:**
- Iniciar contagem regressiva de 10 segundos
- Exibir contador visual em destaque
- Permitir ativação manual do contador
- Desativar automaticamente quando contador chega a zero
- Resetar para 10 segundos após finalização
- Mostrar status do contador ("Contando" durante execução, "Contador" em repouso)
- Atualizar visualmente a cada 100ms para precisão

### RF04 - Integração com API Externa

**Descrição:** O sistema deve consumir dados de uma API externa para obter informações atualizadas da competição.

**Critérios de Aceitação:**
- Realizar chamadas HTTP para endpoint específico (mockapi.io)
- Processar resposta JSON com dados da equipe
- Aplicar valores padrão em caso de dados ausentes
- Tratar erros de conectividade com log no console
- Atualizar interface automaticamente com dados recebidos

### RF05 - Interface de Monitoramento Visual

**Descrição:** O sistema deve fornecer uma interface visual clara e informativa para acompanhamento da competição.

**Critérios de Aceitação:**
- Organizar layout em três seções principais (pesos, principal, informações complementares)
- Exibir cargas estimadas e próximas cargas
- Mostrar informações de apoio/patrocínio
- Utilizar design responsivo e adequado para projeção
- Aplicar estilização consistente com tema da competição

### RF06 - Gerenciamento de Estados da Aplicação

**Descrição:** O sistema deve gerenciar adequadamente os estados internos da aplicação.

**Critérios de Aceitação:**
- Manter estado das linhas de carregamento
- Controlar estado do contador (ativo/inativo)
- Gerenciar dados da equipe e cargas
- Sincronizar estados entre componentes
- Preservar integridade dos dados durante execução

### RF07 - Componente de Linhas Reutilizável

**Descrição:** O sistema deve utilizar componentes reutilizáveis para exibição de informações de carregamento.

**Critérios de Aceitação:**
- Renderizar diferentes tipos de linha baseado em propriedades
- Aplicar estilos condicionais baseados no tipo de dado
- Suportar linhas vazias para espaçamento visual
- Permitir customização via props (tipo, kilo, kilorecorde)
- Manter consistência visual entre todas as instâncias

### RF08 - Controle de Tempo Preciso

**Descrição:** O sistema deve implementar controle de tempo preciso para o contador regressivo.

**Critérios de Aceitação:**
- Utilizar timestamp real para cálculos temporais
- Atualizar a cada 100ms para fluidez visual
- Calcular diferença temporal baseada em Date.now()
- Limpar intervalos automaticamente para evitar vazamentos de memória
- Manter precisão independente de lag do navegador

### RF09 - Tratamento de Dados Ausentes

**Descrição:** O sistema deve tratar adequadamente cenários onde dados esperados não estão disponíveis.

**Critérios de Aceitação:**
- Aplicar valores padrão para campos obrigatórios
- Exibir mensagem de carregamento durante busca de dados
- Manter funcionalidade mesmo com falhas de API
- Log de erros para debugging
- Interface funcional mesmo com dados parciais

### RF10 - Responsividade e Usabilidade

**Descrição:** O sistema deve ser utilizável em diferentes contextos de apresentação.

**Critérios de Aceitação:**
- Adaptar-se a diferentes tamanhos de tela
- Manter legibilidade em projeções
- Utilizar fontes e cores apropriadas
- Organizar informações de forma hierárquica
- Fornecer feedback visual claro para interações

## 4. Requisitos Não-Funcionais Implícitos

### RNF01 - Performance
- Atualização de interface em tempo real sem lag perceptível
- Consumo eficiente de recursos do navegador

### RNF02 - Compatibilidade
- Suporte a navegadores modernos
- Funcionamento em diferentes sistemas operacionais

### RNF03 - Usabilidade
- Interface intuitiva para operadores da competição
- Visibilidade adequada para público espectador

## 5. Tecnologias Utilizadas

- **Frontend:** React 19.1.1 com JSX
- **Build:** Vite 7.1.2
- **Estilização:** CSS customizado
- **Gerenciamento de Estado:** useState e useEffect hooks
- **API:** Integração REST com mockapi.io

## 6. Conclusão

Este sistema serve como ferramenta de apoio visual para competições de pontes de palito, fornecendo informações em tempo real sobre carregamento, dados das equipes e controle temporal. A arquitetura baseada em componentes React permite manutenibilidade e extensibilidade para futuras funcionalidades específicas de competições acadêmicas.