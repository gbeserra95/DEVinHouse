import styled from 'styled-components'

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
`

export const DescriptionInput = styled.label`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 5px;
  color: #212529;
`
export const InputText = styled.input`
  height: 24px;
  border-radius: 5px;
  outline: none;
  border: 2px solid #ced4da;
  padding: 5px 10px;

  &:focus {
    border-color: #ec6d08;
  }
`
