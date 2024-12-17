export default function JsxMapPage() {
  return (
    <>
      <h1>JsxMap 迴圈練習</h1>
      <hr />

      <ul>
        {Array(5)
          .fill(1)
          .map((v, i) => (
            <li key={v + i}>{v + i}</li>
          ))}
      </ul>
    </>
  )
}
