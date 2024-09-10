"use client"
import { useTheme } from 'next-themes'
import React, { useEffect } from 'react'

function Dashboard() {
  const { theme,setTheme } = useTheme()

  useEffect(()=>{
    console.log('Current theme:', theme);
    setTheme('system');
  },[theme])
  return (
    <div>
      page
    </div>
  )
}

export default Dashboard
