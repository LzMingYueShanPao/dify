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
        <div style={{ border: '1px solid gray', fontWeight: 'normal', display: 'block', margin: '0', padding: '4px' }}>
        1、敏感肌适合哪些护肤产品？
        </div>
        <div style={{ border: '1px solid gray', fontWeight: 'normal', display: 'block', margin: '0', padding: '4px' }}>
        2、袋鼠比比儿童舒缓冰凉霜含有哪些成分？
        </div>
        <div style={{ border: '1px solid gray', fontWeight: 'normal', display: 'block', margin: '0', padding: '4px' }}>
        3、袋鼠比比儿童轻阳倍护防晒乳具有哪些规格？
        </div>
        <div style={{ border: '1px solid gray', fontWeight: 'normal', display: 'block', margin: '0', padding: '4px' }}>
        4、袋鼠比比儿童舒缓冰凉霜-50g的产品编号是多少？
        </div>
      </p >
    </div>
  )
}

export default memo(Header)
