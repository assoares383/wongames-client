import * as S from './styles'

const Main = ({
  title = 'React Avancado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo src="/images/logo.svg" alt="Boilerplate NextJS" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/images/hero-illustration.svg"
      alt="Hero Illustration"
    />
  </S.Wrapper>
)

export default Main
