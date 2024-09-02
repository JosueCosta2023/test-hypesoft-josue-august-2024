
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '@/_components/header';
import '@testing-library/jest-dom';

describe('Header Component', () => {
  it('should render the navigation links', () => {
    render(<Header />);
    
    // Verifica se os links de navegação estão renderizados
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('should toggle the menu when the button is clicked', () => {
    render(<Header />);

    // Verifica se o menu está oculto inicialmente
    const menu = screen.getByRole('navigation');
    expect(menu).toHaveClass('hidden');

    // Simula o clique no botão de menu
    const menuButton = screen.getByRole('button');
    fireEvent.click(menuButton);

    // Verifica se o menu foi aberto
    expect(menu).toHaveClass('block');
    
    // Simula outro clique para fechar o menu
    fireEvent.click(menuButton);

    // Verifica se o menu foi fechado novamente
    expect(menu).toHaveClass('hidden');
  });
});
