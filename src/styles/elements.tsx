import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 4rem;
  min-height: 100vh;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.blue};
  padding-bottom: 2rem;
  text-shadow:
    0 2px 1px ${({ theme }) => theme.colors.lighterblue},
    0 2px 2px ${({ theme }) => theme.colors.purple};
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
  gap: 1rem;
`;

export const Item = styled.li`
  padding: 0.5rem;
  border: 0.1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 15px;
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 2px 4px rgba(0, 0, 0, 0.06);
`;

export const ItemTitle = styled.h2`
  font-weight: 600;
  margin-bottom: 0.7rem;
`;

export const ItemBodyText = styled.p`
  margin: 0;
  opacity: 0.6;
  font-size: 0.9rem;
  line-height: 1.5;
`;

export const ItemFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 1rem;
`;

export const Button = styled.button`
  font-size: 1em;
  background: ${({ theme }) => theme.colors.transparent};
  outline: none;
  border: none;
  border-radius: 3px;

  &:hover {
    color: ${({ theme }) => theme.colors.purple};
  }
`;

export const FormEdit = styled.form`
  border-radius: 4px;
  box-shadow: 0 0 30px rgba(#000, 0.1);
  box-sizing: border-box;
  overflow: hidden;
`;

export const Label = styled.label`
  display: block;
  margin: 0.5rem 0 0.5rem;
  font-size: 10px;
  font-weight: lighter;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.2em;
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

  &:focus {
    color: #000000;
  }
`;
