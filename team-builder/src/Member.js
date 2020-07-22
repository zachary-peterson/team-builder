import React from 'react'
import styled from 'styled-components'

const StyledMember = styled.div`
  width: 45%;
  margin: 1% auto;
  border: 2px solid black;

`

function Member(props) {
  const { details } = props

  if (!details) {
    return <h3>Working fetching your friend&apos;s details...</h3>
  }

  return (
    <StyledMember>
      <h2>{details.name}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
    </StyledMember>
  )
}

export default Member