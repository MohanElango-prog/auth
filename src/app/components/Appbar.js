import React from 'react'
import SigninButton from './SigninButton'

const Appbar = props => {
  return (
    <header className="flex gap-4 p-4 bg-gradient-to-b from-white to-gray-200 shadow">
    <SigninButton />
    </header>
  )
}

Appbar.propTypes = {}

export default Appbar