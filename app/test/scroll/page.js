'use client'
import { motion } from 'framer-motion'
import { useRef } from 'react'
export default function EnterAnimation() {
  const container = useRef(null)
  return (
    <>
      <motion.div ref={container} style={containerStyle}>
        <motion.div
          drag
          dragConstraints={container}
          dragMomentum
          dragElastic={0.5}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: 'spring', visualDuration: 0.4, bounce: 1 },
          }}
          style={ball}
        />
      </motion.div>
    </>
  )
}

/**
 * ==============   Styles   ================
 */

const ball = {
  width: 100,
  height: 100,
  backgroundColor: '#dd00ee',
  borderRadius: '50%',
  position: 'relative',
  zIndex: 1,
}
const containerStyle = {
  width: '300px',
  height: '300px',
  margin: '100px auto',
  border: '1px solid red',
}
