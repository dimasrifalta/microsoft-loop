import { UserButton } from '@clerk/nextjs'
import React from 'react'
import Header from './_component/Header'
import WorkspaceList from './_component/WorkspaceList'

function Dashboard() {
  return (
    <div>
      <Header />
      <WorkspaceList />
    </div>
  )
}

export default Dashboard