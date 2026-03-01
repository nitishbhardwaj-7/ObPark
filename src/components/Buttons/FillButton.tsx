import React, { Children } from 'react'
import { ArrowRight } from 'lucide-react';
type FillButtonProps = {
  children: React.ReactNode
  size?: 'md' | 'lg'
}
function FillButton({children , size = 'md'} : FillButtonProps) {
  const sizes = {
    md: 'h-12 w-48',
    lg: 'h-12 w-50'
  }
   return (
    <div className={`group relative ${sizes[size]} overflow-hidden flex items-center justify-center bg-[#074038] rounded-2xl text-white text-xs cursor-pointer hover:bg-[#074038ee]`}>
      
      <span className="relative -left-2 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-4">
        {children}
      </span>

      <div className="absolute inset-0 flex items-center">
        <div className="absolute -left-8 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:left-4">
          <ArrowRight size={20} strokeWidth={3} />
        </div>

        <div className="absolute right-4 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-12 group-hover:opacity-0">
          <ArrowRight size={20} strokeWidth={3} />
        </div>
      </div>
    </div>
  )
}

export default FillButton