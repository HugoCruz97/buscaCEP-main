import styled from "styled-components";

export const Content = styled.form`
  margin-top: 30px;
  margin-bottom: 40px;
  display: grid;
`;

export const Container = styled.div`
  background-color: #1d0435;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px 50px;
  margin-top: 10vh;
  box-shadow: 0px 0px 10px 0px black;
`;

export const Titulo = styled.h2`
  text-align: center;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 10px;
  color: white;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  margin-bottom: 20px;
  border: none;
  background-color: #fffdfd2f;
  color: white;
`;

export const InputButton = styled.input`
  text-align: center;
  border: none;
  height: 40px;
  margin-top: 15px;
  color: #fff;
  background-color: #7d54b3;
  cursor: pointer;

  &:hover {
    background-color: #7d54b37f;
    transition: 0.3s;
  }
`;
