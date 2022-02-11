import React from "react";
import {
  Channels,
  Container,
  CostStructure,
  CustomerRelationships,
  CustomerSegments,
  KeyActivities,
  KeyPartners,
  KeyResources,
  RevenueStreams,
  ValueProposition,
} from "./index.styled";

function BusinessModelCanvas() {
  return (
    <div>
      Business Model Canvas
      <Container>
        <KeyPartners>Key Partners</KeyPartners>
        <KeyActivities>Key Activities</KeyActivities>
        <KeyResources>Key Resources</KeyResources>
        <ValueProposition>Value Propositions</ValueProposition>
        <CustomerRelationships>Customer Relationships</CustomerRelationships>
        <Channels>Channels</Channels>
        <CustomerSegments>Customer Segments</CustomerSegments>
        <CostStructure>Cost Structure</CostStructure>
        <RevenueStreams>Revenue Streams</RevenueStreams>
      </Container>
    </div>
  );
}

export default BusinessModelCanvas;
