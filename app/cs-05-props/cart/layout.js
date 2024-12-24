import ComponentsNavBar from './_components/nav-bar'
export default function CartLayout({ children }) {
  return (
    <>
      <ComponentsNavBar />
      <div>{children}</div>
    </>
  )
}
