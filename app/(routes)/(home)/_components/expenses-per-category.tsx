import { CardContent, CardHeader, CardTitle } from '@/app/_components/ui/card';
import { Progress } from '@/app/_components/ui/progress';
import { ScrollArea } from '@/app/_components/ui/scroll-area';
import { TRANSACTION_CATEGORIES_LABELS } from '@/app/_constants/transactions';
import { TotalExpensePerCategory } from '@/app/_data/get-dashboard/types';

interface ExpensesPerCategoryProps {
  expensesPerCategory: TotalExpensePerCategory[];
}

const ExpensesPerCategory = ({
  expensesPerCategory,
}: ExpensesPerCategoryProps) => {
  return (
    <ScrollArea className="col-span-2 rounded-md border pb-6 h-full">
      <CardHeader>
        <CardTitle className="font-bold">Gastos por Categoria</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {expensesPerCategory.map((category) => (
          <div key={category.category} className="space-y-6">
            <div className="w-full flex justify-between">
              <p className="text-sm font-bold">
                {TRANSACTION_CATEGORIES_LABELS[category.category]}
              </p>
              <span className="text-sm font-bold">
                {category.percentageOfTotal}%
              </span>
            </div>
            <Progress className="h-3" value={category.percentageOfTotal} />
          </div>
        ))}
      </CardContent>
    </ScrollArea>
  );
};

export default ExpensesPerCategory;