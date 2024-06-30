import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: 200,
        margin: 25,
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold' }}>
          The page is not found
        </h2>
        <Link
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 150,
            height: 50,
            fontSize: 24,
            border: '1px solid gray',
            margin: '25px auto',
            borderRadius: 10,
          }}
          href="/"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
