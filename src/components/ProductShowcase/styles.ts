import styled from 'styled-components';

const ShowcaseWrapper = styled.section`
  margin-top: 120px;
  padding: 0 24px;
`;

const ShowcaseItem = styled.div`
  background-color: var(--dark-orange);
  height: 600px;
  padding: 2px 3px 0 4px;
  overflow: hidden;
  border-radius: 8px;
`;

const CircleWrapper = styled.div`
  display: flex;
  height: 50%;
  width: 100%;
`;

const OuterCircle = styled.div`
  position: relative;
  top: -2%;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid #ced4da;
  padding: 20px;
`;

const InnerCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  border: 1px solid #ced4da;
`;

const ShowcaseImg = styled.img`
  width: 50%;
`;

export { ShowcaseWrapper, ShowcaseItem, CircleWrapper, OuterCircle, InnerCircle, ShowcaseImg };
