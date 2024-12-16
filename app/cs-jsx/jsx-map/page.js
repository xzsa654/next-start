export default function JsxMapPage() {
  const Aa = Array(2)
    .fill(1)
    .map((v, i) => <p key={v + i}>{v + i}</p>)
  return (
    <>
      <h1>JsxMap 迴圈練習</h1>
      <hr />
      {Aa}
    </>
  )
}
