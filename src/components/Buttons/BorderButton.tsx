import React from 'react'

type BorderButtonProps = ({
  children: React.ReactNode,
  size?: 'sm' | 'md' | 'lg'
})

function BorderButton({children , size = 'md' } : BorderButtonProps) {
  const sizes = {
    sm: "h-10 w-20 text-[10px]",
    md: "h-10 w-36 text-xs",
    lg: "h-12 w-42 text-xs"
  }
  return (
    <div className={`${sizes[size]} flex items-center justify-center bg-transparent border rounded-2xl hover:rounded-4xl transition-all ease-in-out`}>
        {children}
    </div>
  )
}

export default BorderButton