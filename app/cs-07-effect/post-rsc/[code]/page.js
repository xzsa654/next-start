import db from '@/config/mysql'
import UpdataForm from '../_components/updata-form'
// 直接可以得到params參數
export default async function PostIdPage({ params }) {
  // console.log(params)
  // 得到網址上的動態路由參數，例如 `product/1`，直接就是物件值
  const postId = Number(params.code)

  // 作資料庫查詢
  const [posts] = await db.query(`SELECT * FROM blogs WHERE id=${postId};`)
  const post = posts[0]
  console.log(post)

  return (
    <>
      <h1>部落格詳細頁</h1>
      <hr />
      <p>標題: {post.title}</p>
      <p>內文: {post.content}</p>
      <UpdataForm post={post} />
    </>
  )
}
