import Top from '@/components/shared/Top'

import { getCards } from '@remote/card'
import { getAddBanners } from '@remote/adBanner'
import { useEffect } from 'react'

const HomePage = () => {
  useEffect(() => {
    getCards().then((response) => {
      console.log(response)
    })
    getAddBanners().then((response) => {
      console.log(response)
    })
  }, [])
  return (
    <div>
      <Top
        title="혜택 좋은 카드"
        subTitle="회원님을 위해서 혜택좋은 카드 추천합니다."
      />
    </div>
  )
}

export default HomePage
