import { Suspense } from "react";
import { getAccountWithTransactions } from "@/actions/account";
import { BarLoader } from "react-spinners";
import { notFound } from "next/navigation";
import TransactionTable from "./_component/transaction_table";
import { AccountChart } from "./_component/account-chart";
// import { TransactionTable } from "../_components/transaction-table";
// import { AccountChart } from "../_components/account-chart";

export default async function AccountPage({ params }) {
  const accountData = await getAccountWithTransactions(params.id);

  if (!accountData) {
    notFound();
  }

  const { transactions, ...account } = accountData;

  return (
    <div className="space-y-10 px-5 py-10 max-w-full mx-auto bg-white rounded-2xl shadow-xl border border-gray-100">
      <div className="flex flex-col md:flex-row gap-8 items-end justify-between">
        <div>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight capitalize bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500 text-transparent bg-clip-text mb-2">
            {account.name}
          </h1>
          <p className="text-base text-gray-500 font-medium">
            {account.type.charAt(0) + account.type.slice(1).toLowerCase()} Account
          </p>
        </div>
        <div className="text-right pb-2">
          <div className="text-2xl sm:text-3xl font-bold text-black-700">
            ${parseFloat(account.balance).toFixed(2)}
          </div>
          <p className="text-sm text-gray-400">
            {account._count.transactions} Transactions
          </p>
        </div>
      </div>

      {/* Chart Section */}
      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}
      >
        <AccountChart transactions={transactions} />
      </Suspense>

      {/* Transactions Table */}
       <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}
      >
        <TransactionTable transactions={transactions} />
      </Suspense> 
    </div>
  );
}