import { getUserAccounts } from '@/actions/dashboard'
import { defaultCategories } from '@/data/categories';
import { AddTransactionForm } from './_component/transaction-form';
import { getTransaction } from '@/actions/transaction';

export default async function AddTransactionPage({ searchParams }) {
  const accounts = await getUserAccounts();
  const editId = searchParams?.edit;

  let initialData = null;
  if (editId) {
    const transaction = await getTransaction(editId);
    initialData = transaction;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="text-center md:text-left mb-12">
        <h1
          className="text-4xl md:text-5xl lg:text-[80px] font-extrabold tracking-tighter 
          text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700
          leading-tight"
        >
          {editId ? "Edit Transaction" : "Add Transaction"}
        </h1>
        <p className="text-gray-600 mt-3 text-base md:text-lg">
          {editId 
            ? "Update the details of your transaction below." 
            : "Fill in the details to add a new transaction."}
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-2xl shadow-md p-6 md:p-10">
        <AddTransactionForm
          accounts={accounts}
          categories={defaultCategories}
          editMode={!!editId}
          initialData={initialData}
        />
      </div>
    </div>
  );
}
