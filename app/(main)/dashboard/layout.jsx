
import React, { Suspense } from 'react'
import DashboardPage from './page'
import {BarLoader} from "react-spinners";

const Dashboard = () => {
  return (
   <div className="px-5">
<h1 className="text-5xl md:text-6xl lg:text-[105px] pb-6 font-extrabold tracking-tighter pr-2  text-transparent bg-clip-text bg-gradient-to-br from-blue-600 
      via-cyan-500 
      to-blue-700">Dashboard</h1>

{/* Dashboard Page */}
<Suspense
fallback={<BarLoader className="mt-4" width={"100%"} color=" #008B8B" />}>
<DashboardPage />
</Suspense>
</div>
  )
}

export default Dashboard