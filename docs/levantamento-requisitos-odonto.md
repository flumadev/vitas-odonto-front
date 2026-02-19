# Levantamento Lean de Requisitos — Vitas Odonto

## Contexto e Problema
Hoje, o módulo Odonto opera com etapas críticas em ferramentas separadas (agenda, confirmação, prontuário e cobrança), sem um fluxo único de ponta a ponta. Sem essa integração, a clínica perde previsibilidade operacional: há mais faltas, mais esforço manual da recepção e maior tempo até o fechamento financeiro.

## Objetivo do MVP
Validar um fluxo único e operacional para o atendimento odontológico, cobrindo agendamento, confirmação e cobrança no mesmo processo.

Metas mensuráveis para até 90 dias após o go-live:
- Reduzir em 20% a taxa de não comparecimento em consultas confirmáveis.
- Atingir pelo menos 80% de confirmações automáticas em consultas elegíveis (WhatsApp ou SMS).
- Atingir pelo menos 90% de baixas automáticas de Pix em até 5 minutos após confirmação do pagamento.

## Usuários e Stakeholders
- Paciente: precisa agendar e confirmar consulta com rapidez e clareza.
- Recepção: precisa reduzir confirmação e remarcação manual.
- Dentista: precisa manter evolução clínica e documentos com segurança jurídica.
- Financeiro: precisa reduzir conciliação manual de cobrança.
- Gestor da clínica: precisa controlar eficiência operacional e aderência por plano.

## Hipóteses
- Hipótese de valor: um fluxo único reduz faltas e retrabalho da operação.
- Hipótese de viabilidade: integração com WhatsApp/SMS e Pix é suficiente para validar o MVP sem congelar arquitetura.

## Escopo Mínimo
### Incluído
- Autoagendamento 24/7 por profissional e tipo de atendimento.
- Confirmação e lembrete automáticos com atualização de status na agenda.
- Prontuário digital odontológico com assinatura eletrônica de documentos essenciais.
- Cobrança Pix com baixa automática após confirmação de pagamento.
- Bloqueio de funcionalidades por plano contratado no backend.

### Fora de escopo
- Teleconsulta com vídeo em tempo real.
- Financiamento de tratamento e análise de crédito.
- Integração com maquininha de cartão.
- Emissão fiscal completa (NFS-e) neste MVP.

## Fluxo Principal
```mermaid
flowchart TD
    A[Início] --> B[Paciente acessa autoagendamento (RF-01)]
    B --> C[Seleciona profissional e horário]
    C --> D[Sistema valida disponibilidade e regras (RF-01)]
    D --> E{Horário disponível?}
    E -->|Não| F[Exibir horários alternativos (RF-01)]
    E -->|Sim| H[Registrar consulta na agenda (RF-01)]
    F --> G{Paciente aceita alternativa?}
    G -->|Sim| H
    G -->|Não| L[Encerrar tentativa sem agendamento]
    H --> I[Enviar confirmação automática (RF-02)]
    I --> J[Atualizar status para confirmado (RF-02)]
    J --> K[Gerar cobrança Pix e baixar automaticamente (RF-04)]
    K --> M[Fim]
    L --> M
```

## Requisitos Funcionais Essenciais
- RF-01: O sistema deve permitir autoagendamento 24/7 com validação de disponibilidade por profissional e tipo de atendimento.
- RF-02: O sistema deve enviar confirmação e lembretes automáticos por WhatsApp ou SMS e atualizar o status do agendamento conforme resposta do paciente.
- RF-03: O sistema deve manter prontuário digital com evolução clínica e assinatura eletrônica de documentos obrigatórios.
- RF-04: O sistema deve gerar cobrança Pix com QR Code/link e realizar baixa automática após confirmação do pagamento.
- RF-05: O sistema deve aplicar bloqueio de funcionalidades por plano contratado no backend.

## Requisitos Não Funcionais Críticos
- RNF-01: Disponibilidade mensal mínima de 99,5% para agenda, prontuário e cobrança.
- RNF-02: Tempo de resposta menor que 2 segundos no percentil 95 para agenda e prontuário.
- RNF-03: Segregação lógica de dados por empresa e clínica, com conformidade LGPD.

## Riscos e Incertezas
- Instabilidade de provedores de WhatsApp/SMS pode reduzir taxa de confirmação.
- Divergências de configuração de agenda entre clínicas podem gerar conflitos de disponibilidade.
- Falhas de integração com PSP podem afetar baixa automática do Pix.
- Configuração incorreta de planos pode liberar funcionalidades indevidas.

## Critério de Sucesso
Em até 90 dias após a entrada em produção:
- Redução de 20% na taxa de não comparecimento em consultas elegíveis.
- Pelo menos 80% de confirmações elegíveis executadas de forma automática.
- Pelo menos 90% das cobranças Pix com baixa automática em até 5 minutos.

## Próximos Passos
- Fechar contratos de integração com provedores de WhatsApp/SMS e PSP de Pix.
- Detalhar critérios de aceite de RF-02 e RF-04 com Produto, Engenharia e Financeiro.
- Preparar levantamento técnico para etapa `Ready for Build`.
