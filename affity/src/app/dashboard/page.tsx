'use client'

import withAuth from '@/Components/withAuth'

const Dashboard = () => {
  return (
    <div>
      <h1>hello dashboard</h1>
    </div>
  )
}

export default withAuth(Dashboard)
