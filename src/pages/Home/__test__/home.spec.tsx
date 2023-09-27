import React from 'react';
import renderer from 'react-test-renderer';

import {Home} from '../Home';

jest.mock('@tanstack/react-query', ()=> ({
    useQuery: jest.fn().mockReturnValue({})
}));

describe('<Home />', () => {
  it('Renders the Home component', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect((tree as renderer.ReactTestRendererJSON)?.children?.length).toBe(2);
  });
});
