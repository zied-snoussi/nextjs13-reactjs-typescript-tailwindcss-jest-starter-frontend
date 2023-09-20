import React from 'react';
import { render, screen } from '@testing-library/react';
import Services from '@/app/services/page';

describe('Services', () => {
    it('renders the heading "Our Services"', () => {
        render(<Services />);
        const heading = screen.getByText('Our Services');
        expect(heading).toBeInTheDocument();
    });

    it('renders a list of services', () => {
        render(<Services />);
        const servicesList = screen.getByRole('list');
        expect(servicesList).toBeInTheDocument();

        const serviceItems = screen.getAllByRole('listitem');
        expect(serviceItems).toHaveLength(4); // Assuming there are 4 service items
    });

    it('renders service descriptions', () => {
        render(<Services />);
        const serviceDescriptions = screen.getAllByText(/Description of Service/);
        expect(serviceDescriptions).toHaveLength(4); // Assuming there are 4 service descriptions
    });
});
