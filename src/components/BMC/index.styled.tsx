import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 1%;
  max-width: 1500px;
  max-height: 900px;
  background-color: aquamarine;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template: 3fr 3fr 3fr / 3fr 3fr 3fr 3fr 3fr;
  gap: 3px;
`;

export const KeyPartners = styled.div`
  background-color: aliceblue;
  grid-row: 1 / 3;
  grid-column: 1 / 2;
  display: flex;
  flex-direction: column;
`;

export const KeyActivities = styled.div`
  background-color: burlywood;
  grid-row: 1 / 2;
  grid-column: 2 / 3;
`;

export const KeyResources = styled.div`
  background-color: goldenrod;
  grid-row: 2 / 2;
  grid-column: 2 / 3;
`;

export const ValueProposition = styled.div`
  background-color: aliceblue;
  grid-row: 1 / 3;
  grid-column: 3 / 4;
`;

export const CustomerRelationships = styled.div`
  background-color: red;
  grid-row: 1 / 2;
  grid-column: 4 / 5;
`;

export const Channels = styled.div`
  background-color: blue;
  grid-row: 2 / 2;
  grid-column: 4 / 5;
`;

export const CustomerSegments = styled.div`
  background-color: green;
  grid-row: 1 / 3;
  grid-column: 5 / 6;
`;

export const CostStructure = styled.div`
  background-color: yellow;
  grid-row: 3 / 4;
  grid-column: 1 / 4;
`;

export const RevenueStreams = styled.div`
  background-color: pink;
  grid-row: 3 / 4;
  grid-column: 4 / 6;
`;
