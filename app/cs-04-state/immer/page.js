'use client'

import React, { useState, useEffect } from 'react'
import { produce } from 'immer'
import { useImmer } from 'use-immer'
export default function StateChangeDemoPage(props) {
  const [user, setUser] = useState({
    name: 'joe',
    profile: {
      phone: '0911123123',
      address: {
        city: 'Taipei',
      },
    },
  })

  const [user2, setUser2] = useImmer({
    name: 'Tom',
    profile: {
      phone: '0954168459',
      address: {
        city: 'PenDong',
      },
    },
  })

  return (
    <>
      <h1>Immer操作</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 4)}</pre>
      <br />
      {/* <button
        onClick={() => {
          // 因為name在第一層，所以淺拷貝就足夠
          const nextUser = { ...user, name: 'may' }
          setUser(nextUser)
        }}
      >
        更動姓名(name)為may
      </button>

      <button
        onClick={() => {
          // 因為phone在第二層(profile物件中)，所以還需要再拷貝一層
          const nextUser = {
            ...user,
            profile: {
              ...user.profile,
              phone: '0911123456',
            },
          }
          setUser(nextUser)
        }}
      >
        更動電話(phone)為0911123456
      </button> */}
      <button
        onClick={() => {
          // 因為phone在第二層(profile物件中)，所以還需要再拷貝一層
          const nextUser = produce(user, (draft) => {
            draft.profile.phone = '0915268754'
          })
          setUser(nextUser)
        }}
      >
        更動電話(phone)為0911123456
      </button>
      <button
        onClick={() => {
          // 因為phone在第二層(profile物件中)，所以還需要再拷貝一層
          const nextUser = produce(user, (draft) => {
            draft.profile.address.city = 'Taoyuan'
          })
          setUser(nextUser)
        }}
      >
        更動城市
      </button>
      <hr />
      <h1>useImmer操作</h1>
      <hr />
      <pre>{JSON.stringify(user2, null, 4)}</pre>
      <br />
      <button
        onClick={() => {
          setUser2((draft) => {
            draft.profile.phone = '0985465842'
          })
        }}
      >
        更動電話(phone)=0985465842
      </button>

      <button
        onClick={() => {
          // 因為phone在第二層(profile物件中)，所以還需要再拷貝一層
          setUser2((draft) => {
            draft.profile.address.city = 'Taizong'
          })
        }}
      >
        更動城市
      </button>
    </>
  )
}
