import React from 'react'
import { styled } from 'nativewind'
import { MotiView } from '@design/layout'
import { MotiP } from '@design/typography'
import { Feather as FeatherBase } from '@expo/vector-icons'

const Feather = styled(FeatherBase)

const inactiveStyle = {
  height: 48,
  minWidth: 48,
  borderRadius: 24,
}

const activeStyle = {
  height: 48,
  minWidth: 80,
  borderRadius: 24,
}

interface Props {
  iconName: 'tv' | 'film'
  isActive: boolean
  label: string
}

export const AnimatedTile: React.FC<Props> = ({
  label,
  isActive,
  iconName,
}) => {
  return (
    <MotiView
      from={isActive ? inactiveStyle : activeStyle}
      animate={isActive ? activeStyle : inactiveStyle}
      transition={{
        type: 'timing',
        duration: 450,
      }}
      className='flex-row px-4 cursor-pointer bg-slate-800 items-center justify-center hover:opacity-90'>
      <Feather
        name={iconName}
        size={22}
        className={isActive ? 'text-slate-200' : 'text-slate-400'}
      />
      {isActive && (
        <MotiP
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            type: 'timing',
            duration: 550,
          }}
          className='ml-3 text-slate-200'>
          {label}
        </MotiP>
      )}
    </MotiView>
  )
}
