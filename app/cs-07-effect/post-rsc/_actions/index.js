// 這個檔案是撰寫有關Server Functions(或Server Actions)程式碼
'use server'

import db from '@/config/mysql'
import { revalidatePath } from 'next/cache'

export async function addPost(preState, formData) {
  // 由傳入的formData得到表單(客戶端元件)提交的資料(FormData物件)
  const title = formData.get('title')
  const content = formData.get('content')

  // 執行insert新增資料
  const [result] = await db.query(
    `INSERT INTO blogs (title, content, updated_at) VALUES ('${title}', '${content}', NOW());`
  )

  // 重新驗証資料
  // 通知next資料到期，重新獲取資料與重整快取
  revalidatePath('/cs-07-effect/post-rsc')

  return 'success'
}

export async function updatePost(preState, formData) {
  const post_id = +formData.get('postId')
  const title = formData.get('title')
  const content = formData.get('content')

  const [result] = await db.query(
    `UPDATE blogs SET title='${title}', content='${content}', updated_at = NOW() WHERE id=${post_id};`
  )
  console.log(result)

  revalidatePath('/cs-07-effect/post-rsc/[postId]')
  return 'success'
}
export async function deletePost(preState, formData) {
  // 由傳入的formData得到表單(客戶端元件)提交的資料(FormData物件)
  const postId = Number(formData.get('postId'))

  // 執行刪除的資料庫查詢
  const [result] = await db.query(`DELETE FROM blogs WHERE id=${postId};`)

  // 刪除不能呼叫這個，會導致客戶端元件接不到回傳值
  // 重新驗証資料: 通知next資料快取到期，重新獲取資料與重整快取，用於刷新RSC獲取的資料用，參數為RSC的路徑
  revalidatePath('/cs-07-effect/post-rsc')

  // 回傳成功訊息，客戶端元件會接收到
  return 'success'
}
