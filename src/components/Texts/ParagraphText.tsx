import React from 'react'

type ParagraphText = ({
    children: React.ReactNode;
    size?: 'sm' | 'md' | 'lg'
})

function ParagraphText({children , size = 'md'}: ParagraphText) {
  const sizes = {
    sm : 'text-[10px]',
    md : 'text-sm',
    lg : 'text-xl'
  }
  return (
    <div className={`${sizes[size]}`}>
        {children}
    </div>
  )
}

export default ParagraphText