import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`

export const Loading = styled.div`
  top: 50%;
  left: 50%;
  width: 78px;
  height: 78px;
  display: flex;
  z-index: 1;
  position: absolute;
  transform: translate(-50%, -50%);
  align-items: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.background.surface};
  justify-content: center;
`
