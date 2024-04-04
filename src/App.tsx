import Text from '@shared/Text'
import Button from '@shared/Button'
import Input from '@shared/Input'
import TextField from '@shared/TextField'
import Alert from '@shared/Alert'
import { useState } from 'react'
import { useAlertContext } from '@contexts/AlertContext'

function App() {
  const { open } = useAlertContext()

  return (
    <div className="App">
      <Text typography="t1" display="block">
        t1
      </Text>
      <Text color="grey">t2</Text>
      <Text>t3</Text>
      <Text>t4</Text>

      <div style={{ display: 'block' }}></div>
      <Button>클릭해주세요</Button>
      <Button color="success">클릭해주세요</Button>
      <Button color="error" weak={true}>
        클릭해주세요
      </Button>
      <Button full={true}>클릭해주세요</Button>
      <Button disabled={true}>클릭해주세요</Button>

      <Input placeholder="로그인" aria-invalid={false} />
      <TextField
        label="아이디"
        helpMessage="다시 입력해주세요."
        hasError={true}
      />
      <TextField label="패스워드" />
      {/* <Alert
        open={open}
        title="알럿 테스트"
        description="메세지 입력해주세요."
        onButtonClick={() => setOpen((prev) => !prev)}
      /> */}

      <Button
        onClick={() => {
          open({
            title: '카드신청완료',
            description: '내역페이지에서 확인해주세요.',
            onButtonClick: () => {},
          })
        }}
      >
        얼럿 오픈
      </Button>
    </div>
  )
}

export default App
