import React, { useState, useEffect } from 'react'

export const PreventSSRProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true)
  }, [])

  if (!ready) {
    return null
  }

  return <>{children}</>
}
