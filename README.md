# ⚛️ create-moonee-app

### [npm page](https://www.npmjs.com/package/create-moonee-app)

## why create-moonee-app

- 편한 cra랑 cna (create-next-app) 냅두고 왜 만들었냐..하겠지만 리액트로 프로젝트를 진행할 때 마다 개인적으로는 cra를 잘사용하지 않았고 매번 초기설정을 구축했다. 이유는 cra로 하면 오히려 설정 변경할 때 더 복잡하다고 느꼈기 때문이고, 내가 안쓰는 디펜던시들이 너무 많이 담겨져 있기 때문이다. 물론 cra가 필요할때는 적극적으로 사용한다.
- 근데 초기설정을 내가 하면 늘 기존 프로젝트에서 복붙해오고 구글링하는걸 반복하는데 이게 너무 비효율적이라고 생각했다. 그래서 나만의 아주 쁘띠한 cra ..이름하여 cma를 만들게 되었다.
- 총 네 개의 템플릿이 있고 원하는걸 골라서 설치해주면 된다

## how to use

```
npm i -g create-moonee-app
npx create-moonee-app
```

<br/>

## you can Select from..

### 1. React with JavaScript bolierplate

- React
- React-router
- Emoton 11
- Webpack, Babel configured
- ESLint, Prettier and Husky hook configured

### 2. React with TypeScript bolierplate

- React
- React-router
- TypeScript
- Emotion 11
- Webpack, Babel and tsconfig configured
- ESLint, Prettier and Husky hook configured

### 3. Next.js with JavaScript bolierplate

- React , Next.js
- Emotion 11
- Babel configured
- ESLint, Prettier and Husky hook configured

### 4. Next.js with TypeScript bolierplate

- React , Next.js
- Emotion 11
- TypeScript
- Babel and tsconfig configured
- ESLint, Prettier and Husky hook configured

## I have plans to do..

- [x] Test code for this package
- [ ] Testing Code Setup for Templates (maybe react testing library)
