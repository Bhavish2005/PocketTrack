import { getDashboardData, getUserAccounts } from '@/actions/dashboard'
import CreateAccountDrawer from '@/components/create_drawer'
import { Card, CardContent } from '@/components/ui/card'
import { Plus } from 'lucide-react'
import React from 'react'
import { AccountCard } from './_components/account_card'
import { BudgetProgress } from './_components/budget-progress'
import { DashboardOverview } from './_components/transaction-overview'
import { getCurrentBudget } from '@/actions/budget'
//  (useFetch Hooks we made )hooks are for the Client side not for server side
async function DashboardPage () {
  const [accounts, transactions] = await Promise.all([
    getUserAccounts(),
    getDashboardData(),
  ]);

  const defaultAccount = accounts?.find((account) => account.isDefault);

  // Get budget for default account
  let budgetData = null;
  if (defaultAccount) {
    budgetData = await getCurrentBudget(defaultAccount.id);
  }
  return (
    <div className=" space-y-8 px-5">
    
      <BudgetProgress
        initialBudget={budgetData?.budget}
        currentExpenses={budgetData?.currentExpenses || 0}
      />

      {/* Dashboard Overview */}
      <DashboardOverview
        accounts={accounts}
        transactions={transactions || []}
      />

      {/* Accounts Grid */}
<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
<CreateAccountDrawer>
  <Card className="hover:shadow-xl transition-transform duration-300 hover:scale-105 cursor-pointer border-dashed border-2 border-blue-300 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
    <CardContent className="flex flex-col items-center justify-center text-blue-700 h-full pt-5">
      <div className="bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-600 rounded-full p-4 mb-2 shadow-md">
        <Plus className="h-10 w-10 text-white" />
      </div>
      <p className="text-base font-semibold">Add New Account</p>
    </CardContent>
  </Card>
</CreateAccountDrawer>
{accounts.length>0 && accounts?.map((account)=>{
return <AccountCard key={account.id} account={account} />
})}
</div>
    </div>
  )
}

export default DashboardPage