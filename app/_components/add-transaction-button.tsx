'use client';

import { Tooltip } from '@radix-ui/react-tooltip';
import { ArrowDownUpIcon } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import UpsertTransactionDialog from './upsert-transaction-dialog';

interface AddTransactionButtonProps {
  userCanAddTransaction?: boolean;
}

const AddTransactionButton = ({
  userCanAddTransaction,
}: AddTransactionButtonProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              className="rounded-full font-bold"
              onClick={() => setIsDialogOpen(true)}
              disabled={!userCanAddTransaction}
            >
              Adicionar transação
              <ArrowDownUpIcon />
            </Button>
          </TooltipTrigger>{' '}
          {!userCanAddTransaction && (
            <TooltipContent>
              Você atingiu o limite de transações. Atualize seu plano para
              adicionar mais transações.
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>
      <UpsertTransactionDialog
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
      />
    </>
  );
};

export default AddTransactionButton;
