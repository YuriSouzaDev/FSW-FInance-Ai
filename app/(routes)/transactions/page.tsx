import AddTransactionButton from "@/app/_components/add-transaction-button";
import { DataTable } from "@/app/_components/ui/data-table";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { canUserAddTransaction } from "@/app/_data/can-user-add-transaction";
import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { transationsColumns } from "./_columns";

const TransactionsPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  const transactions = await db.transaction.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });
  const userCanAddTransaction = await canUserAddTransaction();
  return (
    <div className="flex h-full flex-col space-y-6 overflow-hidden p-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <AddTransactionButton userCanAddTransaction={userCanAddTransaction} />
      </div>
      <ScrollArea className="h-full">
        <DataTable
          columns={transationsColumns}
          data={JSON.parse(JSON.stringify(transactions))}
        />
      </ScrollArea>
    </div>
  );
};

export default TransactionsPage;
