import React from "react";
import {
  Channels,
  Container,
  CostStructure,
  CustomerRelationship,
  CustomerSegment,
  KeyActivities,
  Icon,
  KeyPartners,
  KeyResources,
  RevenueStream,
  Title,
  ValueProposition,
  Wrapper,
} from "./index.styled";

import KeyActivitiesPNG from "./assets/key-activities.png";
import KeyPartnersPNG from "./assets/key-partners.png";
import ValuePropositionPNG from "./assets/value-proposition.png";
import CustomerRelationshipPNG from "./assets/customer-relationship.png";
import ChannelsJPG from "./assets/channels.jpg";
import CustomerSegmentJPG from "./assets/customer-segment.jpg";
import RevenueStreamJPG from "./assets/revenue-stream.jpg";
import KeyResourcesJPG from "./assets/key-resources.jpg";
import CostStructurePNG from "./assets/cost-structure.png";

function BusinessModelCanvas() {
  return (
    <Wrapper>
      <Container>
        <Title>Business Model Canvas</Title>

        <KeyPartners>
          Key Partners <Icon src={KeyPartnersPNG} />
        </KeyPartners>
        <KeyActivities>
          Key Activities <Icon src={KeyActivitiesPNG} />
        </KeyActivities>
        <KeyResources>
          Key Resources <Icon src={KeyResourcesJPG} />
        </KeyResources>
        <ValueProposition>
          Value Proposition <Icon src={ValuePropositionPNG} />
        </ValueProposition>
        <CustomerRelationship>
          Customer Relationship <Icon src={CustomerRelationshipPNG} />
        </CustomerRelationship>
        <Channels>
          Channels <Icon src={ChannelsJPG} />
        </Channels>
        <CustomerSegment>
          Customer Segment <Icon src={CustomerSegmentJPG} />
        </CustomerSegment>
        <CostStructure>
          Cost Structure <Icon src={CostStructurePNG} />
        </CostStructure>
        <RevenueStream>
          Revenue Stream <Icon src={RevenueStreamJPG} />
        </RevenueStream>
      </Container>
    </Wrapper>
  );
}

export default BusinessModelCanvas;
