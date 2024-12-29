'use client'

// 當你需要伺服器函式的狀態，或是回應值時，你可以使⽤useActionState(v19)或useFormState(v18.x)這兩個勾⼦。當然它們都是帶有內部狀態的勾⼦，所以只能在客戶端元件中使⽤。
import { useFormState } from 'react-dom'
import { updatePost } from '../_actions'

export default function UpdataForm({ post }) {
  // [控制用狀態, 動作] = useFormState(伺服器函式, 狀態初始值)
  const [state, action] = useFormState(updatePost, null)

  return (
    <>
      {state === 'success' && <p>成功更新</p>}
      <form action={action}>
        <label htmlFor="title">標題</label>
        <input type="text" name="title" defaultValue={post.title} />
        <label htmlFor="content">內文</label>
        <textarea name="content" defaultValue={post.content} />
        <input type="hidden" name="postId" defaultValue={post.id} />
        <button type="submit">更新</button>
      </form>
    </>
  )
}
