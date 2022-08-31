import React from 'react'
import { P, H1 } from '@design/typography'
import { View } from '@design/layout'
import { trpc } from 'src/utils/trpc'

export default function App() {
  const { data, isLoading } = trpc.useQuery([
    'movie.hello',
    { input: 'From TRPC' },
  ])

  return (
    <View className='flex-1 justify-center items-center'>
      <H1 className='text-transparent text-4xl bg-clip-text bg-gradient-to-r from-blue-400 to-red-400'>
        Welcome to Expo + Next.js 👋
      </H1>
      {data && !isLoading && <P className='text-white'>Message From TRPC</P>}
    </View>
  )
}
