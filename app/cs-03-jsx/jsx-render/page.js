export default function JsxRenderPage(props) {
  return (
    <>
      <h1>JSX數值渲染</h1>
      <hr />
      <h2>數值渲染</h2>
      {5 + 5}
      {NaN}
      <h2>字串渲染</h2>
      這是字串
      {'這也是字串'}
      How much {30}
      {`How old are U ? ${23}year`}
      <h2>Boolean:不做渲染</h2>
      {true}
      {false}
      <h2>陣列渲染</h2>
      {/* 相當於Array.join("")
          元件為標籤需添加key屬性，以做辨識
       */}
      {[<p key={1}>test1</p>, <p key={2}>test2</p>]}
    </>
  )
}
