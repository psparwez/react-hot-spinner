import React from 'react';
import { render } from '@testing-library/react';
import { Spinner } from '../index';

describe('Spinner Component', () => {
    test('renders without crashing', () => {
        const { container } = render(<Spinner />);
        expect(container.querySelector('.react-hot-spinner')).toBeInTheDocument();
    });

    test('applies custom size', () => {
        const { container } = render(<Spinner size={100} />);
        const spinner = container.querySelector('.react-hot-spinner');
        expect(spinner).toHaveStyle('font-size: 100px');
    });

    test('applies custom color', () => {
        const { container } = render(<Spinner color="#ff0000" />);
        const style = document.querySelector('style');
        expect(style?.textContent).toContain('background-color: #ff0000');
    });

    test('applies custom className', () => {
        const { container } = render(<Spinner className="custom-spinner" />);
        const spinner = container.querySelector('.react-hot-spinner');
        expect(spinner).toHaveClass('custom-spinner');
    });

    test('centers spinner when center prop is true', () => {
        const { container } = render(<Spinner center />);
        const spinner = container.querySelector('.react-hot-spinner');
        expect(spinner).toHaveClass('center');
        expect(spinner).toHaveStyle({
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            margin: 'auto',
        });
    });

    test('renders 12 spinner blades', () => {
        const { container } = render(<Spinner />);
        const blades = container.querySelectorAll('.spinner-blade');
        expect(blades.length).toBe(12);
    });
});