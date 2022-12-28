import React from 'react'

export const Layout = ({children}: {children:React.ReactNode}) => {
  return (
  <>
      <div className='text-3xl'>Sidebar</div>
      <main className=''>{children}</main>
      </>
  )
}
