'use client'

// 當你需要伺服器函式的狀態，或是回應值時，你可以使⽤useActionState(v19)或useFormState(v18.x)這兩個勾⼦。當然它們都是帶有內部狀態的勾⼦，所以只能在客戶端元件中使⽤。
import { useFormState } from 'react-dom'
import { addPost } from '../_actions'

export default function AddForm() {
  // [控制用狀態, 動作] = useFormState(伺服器函式, 狀態初始值)
  const [state, action] = useFormState(addPost, null)

  return (
    <>
      <form action={action}>
        <label htmlFor="title">標題</label>
        <input type="text" name="title" />
        <label htmlFor="content">內文</label>
        <textarea name="content" />
        <button type="submit">新增</button>
      </form>
    </>
  )
}
