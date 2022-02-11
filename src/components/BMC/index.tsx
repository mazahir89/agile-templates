import React from "react";
import {
  Channels,
  Container,
  CostStructure,
  CustomerRelationships,
  CustomerSegments,
  KeyActivities,
  KeyActivitiesIcon,
  KeyPartners,
  KeyPartnersIcon,
  KeyResources,
  RevenueStreams,
  Title,
  ValueProposition,
  Wrapper,
} from "./index.styled";

import KeyActivitiesPNG from "./assets/key-activities.png";
import KeyPartnersPNG from "./assets/key-partners.png";

function BusinessModelCanvas() {
  return (
    <Wrapper>
      <Container>
        <Title>Business Model Canvas</Title>

        <KeyPartners>
          Key Partners <KeyPartnersIcon src={KeyPartnersPNG} />
        </KeyPartners>
        <KeyActivities>
          Key Activities <KeyActivitiesIcon src={KeyActivitiesPNG} />
        </KeyActivities>
        <KeyResources>Key Resources</KeyResources>
        <ValueProposition>Value Propositions</ValueProposition>
        <CustomerRelationships>Customer Relationships</CustomerRelationships>
        <Channels>Channels</Channels>
        <CustomerSegments>Customer Segments</CustomerSegments>
        <CostStructure>Cost Structure</CostStructure>
        <RevenueStreams>Revenue Streams</RevenueStreams>
      </Container>
    </Wrapper>
  );
}

export default BusinessModelCanvas;
