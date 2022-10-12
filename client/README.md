# wanted-pre-onboarding-fe-7 선발과제

# 프로젝트 실행 방법

- npm install을 통해 실행에 필요한 라이브러리를 설치합니다.(tailwindcss, react-router-dom, react-icons)
- 터미널 환경에서 프로젝트 경로로 이동 하여 npm run start를 실행합니다.
- 프로젝트의 index 페이지가 나타나며, 모든 프로그램이 정상 작동됩니다.
- REST API 경로는 "https://pre-onboarding-selection-task.shop/" 로 설정되어있습니다.

# 구현기능

## 로그인,로그아웃 기능

- 페이지 새로고침시 자동 로그인
- 비로그인 상태에서 TodoPage이동 시 "/" 경로로 이동
- 로그인상태에서 "/"경로로 이동시 "/todo" 경로로 이동
- 로그인 인풋값 검증 및 버튼 활성화
- 로그인 시 token값 설정 및 로그아웃 버튼 노출
- 로그아웃 시 token값 제거 및 "/" 경로로 이동

## Todo 기능

- Todo 불러오기,추가,제거,수정 기능
- Todo 추가 및 수정시 글자 길이 3글자 이상으로 제한
- 진행중인 todo와 완료한 todo 갯수 표시
- Todo 추가 및 수정시 엔터키로 작성 가능
