import type { FC } from 'react'
import { memo } from 'react'

type HeaderProps = {
  title: string
  isMobile: boolean
}
const Header: FC<HeaderProps> = ({
  title,
  isMobile,
}) => {
  return (
    <div
      className={`
      sticky top-0 flex items-center px-8 h-18 bg-white-100 text-base font-bold 
      text-black border-b-[0.5px] border-b-gray-100 backdrop-blur-md z-10
      ${isMobile && '!h-12'}
      `}
    >
      {/* 当前会话：{title}<br /> */}
      
      <p style={{ color: '#155eef' }}>示例：<br />
      <div style={{ border: '1px solid gray', fontWeight: 'normal', display: 'block' , margin: '0', padding: '4px' }}>
        袋鼠比比儿童轻阳倍护防晒乳SPF30PA+++(白帽款)-30g适合什么年龄段的儿童使用？
      </div>
      <div style={{ border: '1px solid gray', fontWeight: 'normal', display: 'block' , margin: '0', padding: '4px' }}>
        袋鼠比比儿童轻阳倍护防晒乳SPF30PA+++(白帽款)-30g的产品优势是什么？
      </div>
      <div style={{ border: '1px solid gray', fontWeight: 'normal', display: 'block' , margin: '0', padding: '4px' }}>
        袋鼠比比儿童轻阳倍护防晒乳SPF30PA+++(白帽款)-30g通过了哪些安全验证？
      </div>
      <div style={{ border: '1px solid gray', fontWeight: 'normal', display: 'block' , margin: '0', padding: '4px' }}>
        袋鼠比比儿童轻阳倍护防晒乳SPF30PA+++(白帽款)-30g的使用特点是什么？
      </div>
      </p >
    </div>
  )
}

export default memo(Header)
