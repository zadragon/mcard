import Button from '@shared/Button'
import { collection, doc, writeBatch } from 'firebase/firestore'

import { store } from '@/remote/firebase'
import { adBanners } from '@/mock/data'
import { COLLECTIONS } from '@/constants'

const AdBannerListAddButton = () => {
  const handleButtonClick = async () => {
    const batch = writeBatch(store)

    adBanners.forEach((banner) => {
      const docRef = doc(collection(store, COLLECTIONS.ADDBANNER))
      batch.set(docRef, banner)
    })

    await batch.commit()
    alert('배너 추가완료')
  }
  return <Button onClick={handleButtonClick}>배너 리스트 추가하기</Button>
}

export default AdBannerListAddButton
