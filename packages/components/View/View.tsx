import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  background-color: #f3f4f6;
  color: #374151;
  padding: 0.625rem;
`;

const PropName = styled.div`
  font-weight: 500;
  margin-right: 0.3125rem;
`;

const Badge = styled.div`
  background-color: #fcd34d;
  color: #333;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 0.625rem;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  margin: 0.3125rem;
  font-size: 0.875rem;
`;

const PropTitle = styled.span`
  font-weight: 500;
  padding: 0.375rem;
`;

const PropValue = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 0.375rem;
  color: #4b5563;
`;

const Grid = styled.div`
  flex: 1;
  background-color: #f3f4f6;
  padding: 0.625rem;
`;

const BadgeWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Equals = styled.span`
  margin-right: 0.125rem;
`;

const Quote = styled.span`
  margin-left: 0.125rem;
`;

interface EnhancedViewProps {
  prop: string;
  value?: string;
  children: React.ReactNode;
}
 

function isChildrenObject(obj: any): obj is { [key: string]: React.ReactNode } {
  return typeof obj === 'object' && obj !== null && !React.isValidElement(obj);
}

export const View: React.FC<EnhancedViewProps> = ({
  prop,
  value = '',
  children,
}) => {
  const childrenObject = isChildrenObject(children) ? children : {};

  return (
    <Container>
      <Header>
        <PropName>{prop}</PropName>
        {value && (
          <BadgeWrapper>
            <Equals>=&quot;</Equals>
            <Badge>{value}</Badge>
            <Quote>&quot;</Quote>
          </BadgeWrapper>
        )}
      </Header>
      <ContentContainer>
        <SubContainer>
          <PropTitle>Props</PropTitle>
          {Object.keys(childrenObject).map((propName) => (
            <PropValue key={propName}>
              {propName}
              {typeof childrenObject[propName] === 'string' && (
                <Badge>{childrenObject[propName]}</Badge>
              )}
            </PropValue>
          ))}
          {Object.keys(childrenObject).length === 0 && (
            <PropValue>No properties selected</PropValue>
          )}
        </SubContainer>
        <Grid>{children}</Grid>
      </ContentContainer>
    </Container>
  );
};

 


interface ViewGroupProps {
  children: ReactNode;
  direction?: 'column' | 'row';
}

export const ViewGroup: React.FC<ViewGroupProps> = ({ children, direction = 'column' }) => {
  return (
    <div style={{ display: 'flex', flexDirection: direction === 'row' ? 'row' : 'column', gap: '1.25rem' }}>
      {children}
    </div>
  );
};
