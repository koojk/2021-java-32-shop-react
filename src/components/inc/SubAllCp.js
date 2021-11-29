import React from 'react';

import styled, { Container, Underline } from '../../style';

const TitleLink = styled(Underline);

const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  border-top: 1px solid #cccccc;
  position: absolute;
  top: 3em;
  left: 0;
  background-color: burlywood;
`;

const SubAllCp = () => {
  return (
    <Wrapper>
      <Container></Container>
    </Wrapper>
  );
};

export default SubAllCp;
