리액트
npx create-react-app  프로젝트명

리액트 주요개념
1. 컴포넌트 만들기
   - 사용자 정의 태그
   - 자바스크립트 함수
      - 함수명은 반드시 대문자로
      - 반드시 return으로 반환 : 하나의 요소만 반환
   - 컴포넌트 추가
      - import로 추가
      - <컴포넌트명 />
   - props
      - 부모 컴포넌트에서 자식 컴포넌트로 자료 전달시 사용
      - <컴포넌트명 속성명={값} />
      - props를 자식 컴포넌트에서 사용할 때 함수의 파라미터로 사용
          - export default function Recoil2(props) 
            변수 접근 시 props.변수명
          - export default function Recoil2({y2}) 
            변수 접근 시 변수명 그대로 사용
   - state 변수
      - 화면의 변경을 감지하기 위한 장치
      - 선언 : [변수명, 변수를 변경하는 set함수명] = useState(초기값);
          - import {useState} from 'react'; import후 사용 
   - 이벤트 달기
      - onClick, onChange, onFocus 등의 이벤트 발생 시 처리할 함수 지정
   - useEffect
      - 사이드 이펙트 처리
      - 선언 : useEffect(()=>{},[]); 
          - import {useEffect} from 'react';
          - []에 다라 실행 시점 결정
              - [] : 컴포넌트 생성 시 한번
              - [state변수] : 특정 state변수가 변경 되었을때
              - [] 생략 : 컴포넌트가 변경되었을때마다 
   - useRef
      - 폼요소 참조시 사용 가능
      - 선언 : const ref변수명 = useRef();
      - import {useRef} from 'react';
      - 폼요소에 ref속성으로 연결 : 
      - <input type = 'number' ref={ref변수명} />

   - recoil로 상태변수 관리





2. TailwindCss
   - className에 클래스명으로 추가
   - 크기
       - 너비 : w-숫자, w-full (상위 컴포넌트 너비를 모두 차지)   
       - 높이 : h-숫자, w-full(상위 컴포넌트 높이를 모두 차지), h-scrren(화면 높이)   
   - 박스
       - flex 박스
          - flex-row (디폴트) : 블록 요소를 가로로 배치
          - flex-col : 블록 요소를 세로로 배치
          - justify- : 기준축으로 정렬
          - items- : 반대축으로 정렬
       - grid 박스
          - grid-cols- : 칸 갯수 설정
          - 반응형 : sm: , md: , lg: 추가
          - grid-gap-숫자 : 칸 간격
   - m- : 마진 설정, ml-,mr-,mx-,mt-,mb-,my-
   - p- : 패딩 설정
   - 배경색 : bg-
   - 글자색 : text-
   - 글자 진하게 : font-bold
   - border : 테두리
