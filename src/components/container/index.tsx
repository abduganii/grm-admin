

export default function Container({className,children}:any) {
  return (
    <div className={`${className && className} w-full max-w-[1140px] mx-auto px-[15px]`}>
      {children}
    </div>
  )
}
