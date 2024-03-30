import React from 'react'
import { NavigationMenuGroup } from './NavigationMenu'

export default function Navbar() {
  return (
    <nav className='flex justify-between px-64 py-8'>
      <h2 className='text-xl font-bold'>Ianduhamel.tech</h2>
      <NavigationMenuGroup />
    </nav>
  )
}
