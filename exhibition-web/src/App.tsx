
import { RefObject, useRef } from 'react'
import './App.css'
import Map from './Map';
function App() {

  const menu1 = useRef<null | HTMLImageElement>(null);
  const menu2 = useRef<null | HTMLDivElement>(null);
  const menu3 = useRef<null | HTMLImageElement>(null);
  const menu4 = useRef<null | HTMLImageElement>(null);
  const menu5 = useRef<null | HTMLImageElement>(null);
  const menu6 = useRef<null | HTMLImageElement>(null);
  const ref1 = useRef<null | HTMLElement>(null);
  const ref2 = useRef<null | HTMLElement>(null);
  const ref3 = useRef<null | HTMLElement>(null);
  const ref4 = useRef<null | HTMLElement>(null);
  const ref5 = useRef<null | HTMLElement>(null);
  const ref6 = useRef<null | HTMLElement>(null);
  const ref7 = useRef<null | HTMLElement>(null);
  const ref8 = useRef<null | HTMLElement>(null);
  const ref9 = useRef<null | HTMLElement>(null);
  const ref10 = useRef<null | HTMLElement>(null);
  const ref11 = useRef<null | HTMLElement>(null);
  const ref12 = useRef<null | HTMLElement>(null);
  const ref13 = useRef<null | HTMLElement>(null);

  const refToCenter = (ref: RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });


    }
  }

  const addClass = (ref: RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.classList.add('select-effect');
      setTimeout(() => { ref.current?.classList.remove('select-effect') }, 3000)
    }
  }


  return (
    <div className='px-4 sm:px-8 pb-8 '>
      <header className='flex bg-white lg:bg-inherit justify-between sticky top-0 pt-8 pb-8 md:pb-0'>
        <a className='flex items-center' onClick={() => refToCenter(menu1)}>
          <h1 className='font-bold text-4xl text-[#CAD86A]'>빛나는 몽상: <br />꿈꿈끙끙</h1>
        </a>
        <a href='http://www.pati.kr/'><img src='/pati.svg' className='w-16' /></a>
      </header>
      <div className='flex flex-col items-center lg:flex-row'>
        <nav className='fixed w-full text-center font-bold bg-white md:bg-none text-md md:text-xl lg:block  lg:top-64 lg:mt-20 lg:w-40 lg:h-56 pb-6'>
          <a className='lg:block lg:m-4 mr-4' onClick={() => refToCenter(menu2)}>소개의 말</a>
          <a className='lg:block lg:m-4 mr-4' onClick={() => refToCenter(menu3)}>관람 안내</a>
          <a className='lg:block lg:m-4 mr-4' onClick={() => refToCenter(menu4)}>참여 작가</a>
          <a className='lg:block lg:m-4 mr-4' onClick={() => refToCenter(menu5)}>작품 소개</a>
          <a className='lg:block lg:m-4' onClick={() => refToCenter(menu6)}>오시는 길</a>
        </nav>
        <main className='flex flex-col justify-center w-full'>
          <div className='flex justify-center min-h-dvh'>
            <img ref={menu1} className='pt-48 md:pt-0' src='/poster.svg' />
          </div>
          <div className=' flex items-center justify-center min-h-dvh'>
            <div className='max-w-[580px] px-2 ' ref={menu2}>
              <p className=' font-semibold text-xl'>어렴풋한 발상을 분명한 실체로 엮어내기까지. 그동안 꾼 꿈 이야기를 하듯이 매주 모였다. <br />&lt;꿈꿈끙끙&gt;은 꿈을 현실로 데려오기 위해 벌어졌던 사투의 이름이자, 그 사투 안에서 작가들이 자신의 이야기를 관철한 결과다. 작업은 책의 형태 또는 책이라는 꿈을 꾸는 가능태로 놓여있다. 공간 한 가운데 놓인 책장-침대는 관객과 책을 매개하며, 책이 꾸는 꿈을-꾸는 관객을 만들어낸다. 책장 위에서 잠들면 책의 꿈을 꿀 수 있을까?
                <br /><br />2024 파주타이포그라피배곳의 스튜디오 수업 ‘빛나는 몽상’의 과정과 결과를 공유한다.
              </p>
            </div>
          </div>
          <div className=' flex items-center justify-center min-h-dvh'>
            <div className='max-w-[580px] px-2' ref={menu3}>
              <p className=' text-xl'><span className='font-bold'>기간</span> | 2024. 5. 16 ~ 2024. 5. 19</p>
              <p className=' text-xl'><span className='font-bold'>공간</span> | 서울 서대문구 북아현로 96-1 2F 스페이스 안팎</p>
              <p className=' text-xl pl-12'> 96-1, Bugahyeon-ro, Seodaemun-gu, Seoul</p>
              <br />
              <p className=' text-xl'><span className='font-bold'>평일</span> | 13:00 ~ 21:00</p>
              <p className=' text-xl'><span className='font-bold'>주말</span> | 11:00 ~ 21:00</p>
            </div>
          </div>
          <div className=' flex items-center justify-center min-h-dvh'>
            <div className='max-w-[580px] px-2 pt-32 md:pt-0 text-xl font-bold' ref={menu4}>
              <h3>김광철.광철</h3>
              <h3>김가현.과</h3>
              <h3>김훈기.파도</h3>
              <h3>김휘수.휘</h3>
              <h3>박서진.먼지</h3>
              <h3>박수민.모아</h3>
              <h3>이수.수</h3>
              <h3>이승민</h3>
              <h3>이수형</h3>
              <h3>이희주.제이</h3>
              <h3>전예원.전시대</h3>
              <h3>한결.결</h3>
              <h3>Marlene</h3>
            </div>
          </div>
          <div className=' flex items-center justify-center' id='5'>
            <div className='max-w-[580px] px-2 pt-32 md:pt-0' >
              <div className=' flex flex-col justify-center items-center min-h-dvh'>
                <h5 className='text-xs breathing-effect py-6'>작품 번호를 눌러서 소개로 이동하세요</h5>
                <img className='w-[100px] md:w-[200px]' src='/map.svg' ref={menu5} />
                <nav className='flex p-1 py-6'>
                  <a onClick={() => { refToCenter(ref13); addClass(ref13) }} className='bg-[#552B8C] p-1 px-2.5 text-white font-bold rounded-full block'>1</a>
                  <a onClick={() => { refToCenter(ref1); addClass(ref1) }} className='bg-[#552B8C] p-1 px-2.5 text-white font-bold rounded-full block'>2</a>
                  <a onClick={() => { refToCenter(ref2); addClass(ref2) }} className='bg-[#552B8C] p-1 px-2 text-white font-bold rounded-full block'>3</a>
                  <a onClick={() => { refToCenter(ref3); addClass(ref3) }} className='bg-[#552B8C] p-1 px-2 text-white font-bold rounded-full block'>4</a>
                  <a onClick={() => { refToCenter(ref4); addClass(ref4); }} className='bg-[#552B8C] p-1 px-2 text-white font-bold rounded-full block'>5</a>

                  <a onClick={() => { refToCenter(ref5); addClass(ref5); }} className='bg-[#552B8C] p-1 px-2 text-white font-bold rounded-full block'>6</a>
                  <a onClick={() => { refToCenter(ref6); addClass(ref6); }} className='bg-[#552B8C] p-1 px-2 text-white font-bold rounded-full block'>7</a>
                  <a onClick={() => { refToCenter(ref7); addClass(ref7); }} className='bg-[#552B8C] p-1 px-2 text-white font-bold rounded-full block'>8</a>
                  <a onClick={() => { refToCenter(ref8); addClass(ref8); }} className='bg-[#552B8C] p-1 px-2 text-white font-bold rounded-full block'>9</a>

                  <a onClick={() => { refToCenter(ref9); addClass(ref9); }} className='bg-[#552B8C] p-1 px-2 text-white font-bold rounded-full block'>10</a>
                  <a onClick={() => { refToCenter(ref10); addClass(ref10); }} className='bg-[#552B8C] p-1 px-2 text-white font-bold rounded-full block'>11</a>
                  <a onClick={() => { refToCenter(ref11); addClass(ref11); }} className='bg-[#552B8C] p-1 px-2 text-white font-bold rounded-full block'>12</a>
                  <a onClick={() => { refToCenter(ref12); addClass(ref12); }} className='bg-[#552B8C] p-1 px-2 text-white font-bold rounded-full block'>13</a>
                </nav>
              </div>
              <main className='space-y-8'>
                <article className='p-4 rounded-md border border-black border-1' ref={ref13}>
                  <header className='md:flex md:items-center md:justify-between my-2'>
                    <h1 className='font-semibold text-xl'>용기를 가지세요. <br />
                      서로 지지하는 친구들 -1<br />
                      서로 지지하는 친구들 -2<br />
                    </h1>
                    <h2 className='font-semibold'>김광철.광철</h2>
                  </header>
                  <p>
                    1. 용기를 가지세요. - 삶은 다양한 모습으로 존재합니다. 가끔 남들에 휘둘려 자신의 모습이 흐려질 때 우린 스스로를 사랑할수 있는 용기가 필요합니다. 용기를 가지세요. 이책은 분명 당신에게 용기를 줄 것 입니다. <br /><br /> 2,3. 서로 지지하는 친구들 - 아주 작은 생명체부터 큰 생명체까지 살아가기 위해선 다른 존재가 필요합니다. 책에 등장하는 많은 생명체들은 마치 탑처럼 서로가 서로를 지지하고 있습니다. 누군가 없어진다면 책은 무너지겠죠. ? 이 책을 나를 지지해 주는 친구와 가족에게 선물을 줘보는건 어떨까요?
                    <br /><br />
                    + 여행을 다니면서 드로잉을 하며 살고 싶습니다.   그렇다면 간단 해야 겠죠?<br />
                    + A3사이즈의 한정된 상황속에서 3개의 책을 제작하였습니다.
                  </p>
                </article>
                <article className='p-4 rounded-md border border-black border-1' ref={ref1}>
                  <header className='md:flex md:items-center md:justify-between my-2'>
                    <h1 className='font-semibold text-xl'>읽기 실행 결과로써의 책 </h1>
                    <h2 className='font-semibold'>김가현.과</h2>
                  </header>
                  <p>
                    &lt;읽기 실행 결과로써의 책&gt;은 책이 일종의 프로그램 패키지이고, 독자가 글-코드를 읽어들여 실행하는 장치라고 가정한다. 읽기가 실행된 결과를 물리적으로 취득하려고 할때, 글-코드의 내용은 읽기 과정에 어떤 영향을 끼칠 수 있을까? 읽기 실행 결과로써의 책을 다시 읽는 우리는, 무엇을 실행하고 있나?</p>
                </article>
                <article id='' className='p-4 rounded-md border border-black border-1' ref={ref2}>
                  <header className='md:flex md:items-center md:justify-between my-2'>
                    <h1 className='font-semibold text-xl'>이해란 뭘까요</h1>
                    <h2 className='font-semibold'>김훈기.파도</h2>
                  </header>
                  <p>이해란 뭘까요. 우리는 타인을 이해 해야만, 타인에게 이해 받아야만 살아 갈 수 있을까요?</p>
                </article>
                <article id='' className='p-4 rounded-md border border-black border-1' ref={ref3}>
                  <header className='md:flex md:items-center md:justify-between my-2'>
                    <h1 className='font-semibold text-xl'>휘의 캡슐 레스토랑</h1>
                    <h2 className='font-semibold'>김휘수.휘</h2>
                  </header>
                  <p>패스트푸드 음식을 만들기 위해 숲속 이 파괴가 되는 현상을 막기위해 최소한의 재료로 음식의 미래를 관한 한 이야기 그림책.</p>
                </article>
                <article id='' className='p-4 rounded-md border border-black border-1' ref={ref4}>
                  <header className='md:flex md:items-center md:justify-between my-2'>
                    <h1 className='font-semibold text-xl'>모집합니다</h1>
                    <h2 className='font-semibold'>박서진.먼지</h2>
                  </header>
                  <p>평범과 비범 사이에서 뛰어노는 유쾌한 스파이들이 있다.
                    이들에게 평범은 누구보다 비범한 것이며, 비범함은 누구보다 평범한 것이다. 그 사이를 뛰어놀 수 있는 가장 재미있는 방법은 ‘평범을 의식하는 것’. 어쩌면 우리는 가장 가깝고 가장 은밀한 곳에서 그 방법을 터득할 수 있을 것이다. </p>
                </article>
                <article className='p-4 rounded-md border border-black border-1' ref={ref5}>
                  <header className='md:flex md:items-center md:justify-between my-2'>
                    <h1 className='font-semibold text-xl'>소파 밑에 무엇이 있을까?</h1>
                    <h2 className='font-semibold'>박수민.모아</h2>
                  </header>
                  <p>여기, 소파가 있어요.<br />
                    그 위에는 누군가 앉아 있구요.<br />
                    그리고 그 아래엔⋯.<br />
                    <br />
                    소파 밑엔 무엇이 있을까요?
                  </p>
                </article>
                <article id='' className='p-4 rounded-md border border-black border-1' ref={ref6}>
                  <header className='md:flex md:items-center md:justify-between my-2'>
                    <h1 className='font-semibold text-xl'>이수동산 | Trace of Lee Sue</h1>
                    <h2 className='font-semibold'>이수.수</h2>
                  </header>
                  <p>이수 동산의 교주인 이수 선생이 세상에 남긴 은혜와 영광의 흔적을 담았다. 우리는 아무도 이수 선생의 사고 방식을 이해할 수 없지만 조금이나마 그녀의 흔적을 따라가본다.
                  </p>
                </article>
                <article id='' className='p-4 rounded-md border border-black border-1' ref={ref7}>
                  <header className='md:flex md:items-center md:justify-between my-2'>
                    <h1 className='font-semibold text-xl'>상상현상</h1>
                    <h2 className='font-semibold'>이승민</h2>
                  </header>
                  <p>꿈은 깨어나 현실과 맞닿는 순간부터 색이 바래기 시작합니다. 꿈을 수집해 비언어적 도구로 현상하여 기록합니다.
                  </p>
                </article>
                <article id='' className='p-4 rounded-md border border-black border-1' ref={ref8}>
                  <header className='md:flex md:items-center md:justify-between my-2'>
                    <h1 className='font-semibold text-xl'>나의 지출에 대해</h1>
                    <h2 className='font-semibold'>이수형</h2>
                  </header>
                  <p>내가 얼마나 많은 돈을 쓰는지 라는 과제물입니다.
                  </p>
                </article>
                <article id='' className='p-4 rounded-md border border-black border-1' ref={ref9}>
                  <header className='md:flex md:items-center md:justify-between my-2'>
                    <h1 className='font-semibold text-xl'>using System; <br />using System.collections.Generic;</h1>
                    <h2 className='font-semibold'>이희주.제이</h2>
                  </header>
                  <p>기계적인 것은 과연 반(反) 인간적인가?
                    어쩌면 우리가 꿈꿔오던 삶은 기계적인 것이 아닐까.
                    만족스러운 결과물을 도출하기 위해 끊임없이 재부팅 하고, 원한다면 리셋하며 어떻게 해서든 결과값을 도출하는 삶. 나는 기계를 꿈꾼다
                  </p>
                </article>
                <article id='' className='p-4 rounded-md border border-black border-1' ref={ref10}>
                  <header className='md:flex md:items-center md:justify-between my-2'>
                    <h1 className='font-semibold text-xl'>시대를 초월한 마음</h1>
                    <h2 className='font-semibold'>전예원.전시대</h2>
                  </header>
                  <p>오래된 것들에 대한 애정과 과거와 현재가 만나는 지점에서 나 자신을 투영하며 독특한 대화를 이끌어내는 데에 집중했다. 아날로그와 디지털의 경계를 넘나들며 경험한 감정과 메시지를 시대만의 방식으로 재해석하고, 애정 하는 작품들을 새롭게 조명하고자 했다. 이 과정은 내게 건네준 커다란 위안에 대한 감사의 표현이기도 하다. 나의 시각적 대화를 통해 다시 한번 이루어지는 감정의 공유를 기대해 본다.
                  </p>
                </article>
                <article id='' className='p-4 rounded-md border border-black border-1' ref={ref11}>
                  <header className='md:flex md:items-center md:justify-between my-2'>
                    <h1 className='font-semibold text-xl'>EVERYTHING COULD BE A STOOL</h1>
                    <h2 className='font-semibold'>한결.결</h2>
                  </header>
                  <p>영감을 얻을 수 있는 가장 쉬운 방법은 주변을 둘러보는 일입니다. 일상에서 무심코 지나쳤던 물건, 아무 생각 없이 먹던 음식, 익숙했던 생물을 가만히 바라보면 새삼스럽게 아름다운 면을 발견할 수 있습니다.
                    디자인을 하기 앞서 형태를 떠올리는 일이 막연하게 느껴지고, 머릿속이 새하얘진다면 늘 곁에 있는 사물의 윤곽을 떠올려 보세요. 창작의 시작은 새로운 풍경을 보는 것이 아니라 새로운 시각을 가지는 것입니다.                 </p>
                </article>
                <article id='' className='p-4 rounded-md border border-black border-1' ref={ref12}>
                  <header className='md:flex md:items-center md:justify-between my-2'>
                    <h1 className='font-semibold text-xl'>Mut in der Tasche/주머니 속 용기</h1>
                    <h2 className='font-semibold'>Marlene</h2>
                  </header>
                  <p>Imagine you always had someone to give you an encouraging nod when you didn't dare to do something you wanted to do. Someone whose hand you can hold when you're nervous. Someone who listens to you and your fears. Even and especially when you are alone. A little buddy who can encourage you from your pocket and keep you company when you have no one else. A companion, so to speak, who embodies your courage and doesn't let you feel alone.
                    <br /><br />
                    하고 싶은 일이 있어도 감히 엄두가 나지 않을 때 항상 격려의 고개를 끄덕여주는 사람이 있다고 상상해 보세요. 긴장할 때 손을 잡을 수 있는 사람. 당신과 당신의 두려움에 귀 기울여주는 사람. 특히 혼자 있을 때 더욱 그렇습니다. 아무도 없을 때 곁에서 격려해주고 말동무가 되어줄 수 있는 작은 친구. 말하자면, 여러분의 용기를 북돋아주고 외로움을 느끼지 않게 해주는 동반자라고 할 수 있습니다. </p>
                </article>
              </main>
            </div>
          </div>
          <div className='flex flex-col space-y-4 items-center justify-center min-h-dvh pt-36 md:pt-0' ref={menu6}>
            <div className='space-x-2'>
              <a target='_blank' href='https://map.naver.com/p/directions/-/14132328.0305123,4518175.6673756,%EC%95%88%ED%8C%8E,1408787978,PLACE_POI/-/transit?c=15.00,0,0,0,dh' className='bg-green-200 p-2 border border-black border-1 hover:bg-green-300'>네이버지도로 길찾기</a>
              <a target='_blank' href='https://map.kakao.com/link/to/818652939' className='bg-yellow-200 p-2 border border-black border-1 hover:bg-yellow-300'>카카오맵으로 길찾기</a>
            </div>
            <Map />
          </div>
        </main>
      </div >
    </div >
  )
}

export default App
