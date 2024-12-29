'use client'

// 當你需要伺服器函式的狀態，或是回應值時，你可以使⽤useActionState(v19)或useFormState(v18.x)這兩個勾⼦。當然它們都是帶有內部狀態的勾⼦，所以只能在客戶端元件中使⽤。
import { useFormState } from 'react-dom'
import { deletePost } from '../_actions'

export default function DeleteForm({ postId }) {
  // [控制用狀態, 動作] = useFormState(伺服器函式, 狀態初始值)
  const [state, action] = useFormState(deletePost, null)

  // 跳出成功訊息
  if (state === 'success') {
    alert('成功刪除!')
  }

  return (
    <>
      <form action={action}>
        <input type="hidden" name="postId" defaultValue={postId} />
        <button type="submit">刪除</button>
      </form>
    </>
  )
}
