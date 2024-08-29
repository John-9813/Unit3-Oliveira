import { render, screen, } from '@testing-library/react'
import Welcome from '../components/Welcome'

describe('Welcome render testing', () => {
    it('should render', () => {

        render(<Welcome />)

        expect(screen.getByText('Benvenuti in EpiBooks!')).toBeInTheDocument()
        
    })
})