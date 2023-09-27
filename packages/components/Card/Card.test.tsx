import { axe, toHaveNoViolations } from 'jest-axe';
import { createRef } from 'react';
import * as React from 'react';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { Card } from '.';

const cardContent = (
  <>
    <Card.Header>Header</Card.Header>
    <Card.Body>Body</Card.Body>
    <Card.Footer>Footer</Card.Footer>
  </>
);

describe('Card', () => {
  it('should render', () => {
    render(<Card>{cardContent}</Card>);
  });

  it('should forward ref', () => {
    const ref = createRef<HTMLDivElement>();

    render(<Card ref={ref}>{cardContent}</Card>);
    expect(ref.current).not.toBeNull();
  });

  it('should pass id prop', () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <Card ref={ref} id="card-id">
        {cardContent}
      </Card>
    );
    expect(ref.current).toHaveProperty('id', 'card-id');
  });

  it('should generate id prop', () => {
    const ref = createRef<HTMLDivElement>();

    render(<Card ref={ref}>{cardContent}</Card>);
    expect(ref.current).toHaveProperty('id');
  });

  it('should be accessible', async () => {
    expect.extend(toHaveNoViolations);
    const { container } = render(<Card>{cardContent}</Card>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
