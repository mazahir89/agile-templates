import styled from "styled-components";
import KeyActivitiesPNG from './assets/key-activities.png';


export const Wrapper = styled.div`
display: flex;
justify-content: center;

`;
export const Container = styled.div`
  margin: 1%;
  padding: 30px;
  font-family: monospace;
  font-weight: bold;
  font-size: 24px;
  max-width: 1200px;
  max-height: 800px;
  background-color: #5c1855;
  height: 100vh;
  width: 100vw;
  display: grid;
  border-radius: 6px;
  grid-template: 0.5fr 2fr 2fr 2fr / 2fr 2fr 2fr 2fr 2fr;
  gap: 3px;
  color: white;
  box-shadow: 6px 6px 4px #888888;
`;

export const Title = styled.div`
  border-radius: 6px;
  font-size: 30px;
  text-align: center;
  grid-row: 1 / 3;
  grid-column: 1 / 6;
  display: flex;
  flex-direction: column;
`;

export const KeyPartners = styled.div`
  background-color:  #fb9b08;
  border-radius: 6px;
  padding-left: 6px;
  padding-top: 6px;
  font-size: 18px;
  grid-row: 2 / 4;
  grid-column: 1 / 2;
`;

export const KeyActivities = styled.div`
  background-color: #7d20a5;
  border-radius: 6px;
  padding-left: 6px;
  padding-top: 6px;
  font-size: 18px;
  grid-row: 2 / 3;
  grid-column: 2 / 3;
`;

export const KeyResources = styled.div`
  background-color: #fb6727;
  border-radius: 6px;
  padding-left: 6px;
  padding-top: 6px;
  font-size: 18px;
  grid-row: 3 / 4;
  grid-column: 2 / 3;
`;

export const ValueProposition = styled.div`
  background-color: #04a94b;
  border-radius: 6px;
  padding-left: 6px;
  padding-top: 6px;
  font-size: 18px;
  grid-row: 2 / 4;
  grid-column: 3 / 4;
`;

export const CustomerRelationships = styled.div`
  background-color: #423199;
  border-radius: 6px;
  padding-left: 6px;
  padding-top: 6px;
  font-size: 18px;
  grid-row: 2 / 3;
  grid-column: 4 / 5;
`;

export const Channels = styled.div`
  background-color: #ac2ef2;
  border-radius: 6px;
  padding-left: 6px;
  padding-top: 6px;
  font-size: 18px;
  grid-row: 3 / 4;
  grid-column: 4 / 5;
`;

export const CustomerSegments = styled.div`
  background-color: #0081ff;
  border-radius: 6px;
  padding-left: 6px;
  padding-top: 6px;
  font-size: 18px;
  grid-row: 2 / 4;
  grid-column: 5 / 6;
`;

export const CostStructure = styled.div`
  background-color: #274fd3;
  border-radius: 6px;
  padding-left: 6px;
  padding-top: 6px;
  font-size: 18px;
  grid-row: 4 / 5;
  grid-column: 1 / 4;
`;

export const RevenueStreams = styled.div`
  background-color: #a23272;
  border-radius: 6px;
  padding-left: 6px;
  padding-top: 6px;
  font-size: 18px;
  grid-row: 4 / 5;
  grid-column: 4 / 6;
`;

export const KeyActivitiesIcon = styled.img`
float: right;
padding-right: 6px;
width: 20px;
height: 20px;
`;

export const KeyPartnersIcon = styled.img`
float: right;
padding-right: 6px;
width: 20px;
height: 20px;
`;