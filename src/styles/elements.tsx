import styled from 'styled-components';

export const MainContainer = styled.main`
  display: grid;
  width: 100%;
  grid-template-areas:
    'Header Header'
    'CreateTag ListTag';
  grid-template-rows: 0.2fr 1fr;
  grid-template-columns: 0.5fr 1fr;

  @media (max-width: 768px) {
    border: 1px solid fuchsia;
    display: flex;
    flex-direction: column;
  }
`;

export const Header = styled.header`
  grid-area: Header;
  background-color: ${({ theme }) => theme.colors.lighterblue};
  padding: 1rem 2rem;

  & span {
    margin: 40px auto;
    font-size: 2rem;
    font-weight: bold;
    color: #121212;
    text-align: center;
    letter-spacing: 5px;
    text-shadow:
      -1px 1px 0 ${({ theme }) => theme.colors.green},
      1px 1px 0 ${({ theme }) => theme.colors.red},
      1px -1px 0 ${({ theme }) => theme.colors.darkblue},
      -1px -1px 0 ${({ theme }) => theme.colors.yellow};
  }
`;

export const CreateTag = styled.div`
  grid-area: CreateTag;
  margin: 2rem;
`;

export const ListTag = styled.div`
  grid-area: ListTag;
  margin: 2rem;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  padding-bottom: 2rem;
  font-size: 1rem;
  font-weight: lighter;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

export const Span = styled.span`
  display: block;
  margin: 0.5rem 0 0.5rem;
  font-size: 10px;
  font-weight: lighter;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

export const Flex = styled.div`
  display: flex;
`;

export const UnorderedList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 15rem;
  min-height: 15rem;
  padding: 1rem;
  border: 0.1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 15px;
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 2px 4px rgba(0, 0, 0, 0.06);
`;

export const ItemTitle = styled.h2`
  font-weight: 600;
  margin-bottom: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ItemBodyText = styled.p`
  margin-bottom: 1rem;
  opacity: 0.6;
  font-size: 0.9rem;
  line-height: 1.5;
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ItemFooter = styled.footer`
  display: flex;
`;

export const Button = styled.button`
  font-size: 1em;
  background: ${({ theme }) => theme.colors.transparent};
  outline: none;
  border: none;
  border-radius: 3px;
  padding: 5px 8px;
  width: 100%;

  display: flex;
  justify-content: center;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;

  &#newTag {
    border: 0.1px solid ${({ theme }) => theme.colors.gray};
    border-radius: 15px;
    box-shadow:
      0 4px 6px rgba(0, 0, 0, 0.1),
      0 2px 4px rgba(0, 0, 0, 0.06);
    margin: 0.5rem 0;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.purple};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  border-radius: 4px;
  box-shadow: 0 0 30px rgba(#000, 0.1);
  box-sizing: border-box;
  overflow: hidden;
  flex-grow: 1;
`;

export const Label = styled.label`
  display: block;
  margin: 0.5rem 0 0.5rem;
  font-size: 10px;
  font-weight: lighter;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

export const Input = styled.input`
  outline: none;
  display: block;
  background: #f3f3f3;
  width: 100%;
  border: 0;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 12px 15px;
  color: #828181;
  line-height: inherit;
  transition: 0.3s ease;
  margin-bottom: 1rem;

  &:focus {
    color: #000000;
  }
  &::placeholder {
    font-size: 0.8rem;
  }
`;
