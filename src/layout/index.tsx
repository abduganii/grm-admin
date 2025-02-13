import Header from "./header";
import Menu from "./menu";

export default function Layout({children}:any) {
  return (
      <div className='flex h-screen'>
          <Menu/>
          <div className='w-full h-screen'>
              <Header/>
            {children}    
          </div>
    </div>
  )
}
