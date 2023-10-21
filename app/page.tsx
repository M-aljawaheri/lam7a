import RootLayout from './layout'
import Header from './components/header';


export default function Page() {
  return (
    <RootLayout>
      <div className="relative">
        {/* <Sidebar /> */}
        <Header />
      </div>
    </RootLayout>
  )
}
