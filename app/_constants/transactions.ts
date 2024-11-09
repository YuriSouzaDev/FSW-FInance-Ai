import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from '@prisma/client';

export const TRANSACTION_CATEGORIES_LABELS = {
  HOUSING: 'Moradia',
  TRANSPORTATION: 'Transporte',
  FOOD: 'Alimentação',
  ENTERTAINMENT: 'Entretramento',
  HEALTH: 'Saúde',
  UTILITY: 'Utilidade',
  SALARY: 'Salário',
  EDUCATION: 'Educação',
  OTHER: 'Outros',
};

export const TRANSACTIONS_PAYMENT_METHODS_LABELS = {
  CREDIT_CARD: 'Cartão de Crédito',
  DEBIT_CARD: 'Cartão de Débito',
  BANK_TRANSFER: 'Transferência Bancária',
  BANK_SLIP: 'Boleto',
  CASH: 'Dinheiro',
  PIX: 'Pix',
  OTHER: 'Outros',
};

export const TRANSACTION_TYPE_OPTIONS = [
  {
    value: TransactionType.DEPOSIT,
    label: 'Depósito',
  },
  {
    value: TransactionType.EXPENSE,
    label: 'Despesa',
  },
  {
    value: TransactionType.INVESTMENT,
    label: 'Investimento',
  },
];

export const TRANSACTION_PAYMENT_METHOD_OPTIONS = [
  {
    value: TransactionPaymentMethod.CASH,
    label: TRANSACTIONS_PAYMENT_METHODS_LABELS[TransactionPaymentMethod.CASH],
  },
  {
    value: TransactionPaymentMethod.OTHER,
    label: TRANSACTIONS_PAYMENT_METHODS_LABELS[TransactionPaymentMethod.OTHER],
  },
  {
    value: TransactionPaymentMethod.CREDIT_CARD,
    label:
      TRANSACTIONS_PAYMENT_METHODS_LABELS[TransactionPaymentMethod.CREDIT_CARD],
  },
  {
    value: TransactionPaymentMethod.DEBIT_CARD,
    label:
      TRANSACTIONS_PAYMENT_METHODS_LABELS[TransactionPaymentMethod.DEBIT_CARD],
  },
  {
    value: TransactionPaymentMethod.PIX,
    label: TRANSACTIONS_PAYMENT_METHODS_LABELS[TransactionPaymentMethod.PIX],
  },
  {
    value: TransactionPaymentMethod.BANK_SLIP,
    label:
      TRANSACTIONS_PAYMENT_METHODS_LABELS[TransactionPaymentMethod.BANK_SLIP],
  },
  {
    value: TransactionPaymentMethod.BANK_TRANSFER,
    label:
      TRANSACTIONS_PAYMENT_METHODS_LABELS[
        TransactionPaymentMethod.BANK_TRANSFER
      ],
  },
];

export const TRANSACTION_CATEGORY_OPTIONS = [
  {
    value: TransactionCategory.HOUSING,
    label: TRANSACTION_CATEGORIES_LABELS[TransactionCategory.HOUSING],
  },
  {
    value: TransactionCategory.EDUCATION,
    label: TRANSACTION_CATEGORIES_LABELS[TransactionCategory.EDUCATION],
  },
  {
    value: TransactionCategory.FOOD,
    label: TRANSACTION_CATEGORIES_LABELS[TransactionCategory.FOOD],
  },
  {
    value: TransactionCategory.HEALTH,
    label: TRANSACTION_CATEGORIES_LABELS[TransactionCategory.HEALTH],
  },
  {
    value: TransactionCategory.ENTERTAINMENT,
    label: TRANSACTION_CATEGORIES_LABELS[TransactionCategory.ENTERTAINMENT],
  },
  {
    value: TransactionCategory.OTHER,
    label: TRANSACTION_CATEGORIES_LABELS[TransactionCategory.OTHER],
  },
  {
    value: TransactionCategory.SALARY,
    label: TRANSACTION_CATEGORIES_LABELS[TransactionCategory.SALARY],
  },
  {
    value: TransactionCategory.TRANSPORTATION,
    label: TRANSACTION_CATEGORIES_LABELS[TransactionCategory.TRANSPORTATION],
  },
  {
    value: TransactionCategory.UTILITY,
    label: TRANSACTION_CATEGORIES_LABELS[TransactionCategory.UTILITY],
  },
];
