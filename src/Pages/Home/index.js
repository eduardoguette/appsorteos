import React from 'react'
import FormIG from "../../Componentes/FormIG"
import Header from "../../Componentes/Header"
import styled from "styled-components"
const DivHome = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;
`
function Home() {
  return (
    <DivHome>
      <Header/>
      <FormIG/>
    </DivHome>
  )
}

export default Home;
