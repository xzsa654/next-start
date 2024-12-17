'use client'

// 導入時就自動轉為JS資料格式
import products from './_data/Product.json'
import styles from './_styles/product-table.module.css'

export default function ProductTablePage() {
  // console.log(data)
  return (
    <>
      <table className={styles['my-table']}>
        <thead>
          <tr>
            <th>sn</th>
            <th>圖片</th>
            <th>名稱</th>
            <th>價格</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.sn}>
                <td>{product.sn}</td>
                <td>
                  <img src={`/images/${product.photos.split(',')[0]}`} alt="" />
                </td>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
