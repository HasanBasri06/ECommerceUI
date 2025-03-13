
export default function DarkTemplate({children}) {
  return (
    <div className='w-full h-full fixed left-0 top-0 z-50 bg-[rgba(0,0,0,0.3)] pointer-events-auto'>{children}</div>
  )
}
