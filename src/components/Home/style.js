import styled from "styled-components";

const ContainerWrapper = styled.div`
width:100%;
 min-height:100vh;
  background-color: #f8f8f8cf;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 450px;
  margin: 60px auto;
`;
const Card = styled.div`
  padding: 20px;
  width: 95%;
  border: 1px solid #e7e1e1;
  max-height: 200px;
  background: white;
`;
const CardContainer = styled.div`

padding: 20px;
width:95%;
border: 1px solid #e7e1e1;
height:auto;
 background: white;


`;
const Text = styled.p`
  margin-bottom: 10px;
  font-size: 1rem;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.65);
`;
const Heading = styled.h1`
 
font-size: 2rem;
font-weight: 700;
color: rgba(0,0,0,0.65);
margin-left: "20px";
margin-top: -68px;
margin-left: 102px;
`;

export { Card, ContainerWrapper, Container, Text, CardContainer,Heading };
