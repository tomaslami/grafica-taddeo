import React from "react"

type BarsIconProps = {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  color?: string
}

const BarsIcon = ({ isOpen, setIsOpen, color = "white" }: BarsIconProps) => {
  return (
    <div onClick={() => setIsOpen(!isOpen)} className=" cursor-pointer w-8 h-8 flex items-center justify-center z-50">
      {isOpen ? (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            fill={color}
          />
        </svg>
      ) : (
        <svg className="z-50" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill={color} />
        </svg>
      )}
    </div>
  )
}

export default BarsIcon

