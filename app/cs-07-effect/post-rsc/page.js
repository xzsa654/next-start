import db from '@/config/mysql'
import List from './_components/list'
import AddForm from './_components/add-from'
export default async function PostRscPage(props) {
  const [posts] = await db.query('SELECT * FROM blogs;')

  return (
    <>
      <h1>部落格列表頁(RSC伺服器端元件)</h1>
      <List posts={posts} />
      <AddForm />
    </>
  )
}
