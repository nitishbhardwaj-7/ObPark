import React from 'react'

type TitleTextProps = ({
    children:React.ReactNode;
})

function TitleText({children}:TitleTextProps) {
  return (
    <div className='mgbold text-4xl md:text-7xl text-[#074038]'>
        {children}
    </div>
  )
}

export default TitleText