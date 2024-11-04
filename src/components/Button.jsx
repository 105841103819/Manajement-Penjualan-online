
export default function ({handler, children, color, type}) {
  return (
    <button onClick={handler} className={`border px-5 py-1 text-white rounded-md ${color}`} type={type}>{children}</button>
  )
} 
