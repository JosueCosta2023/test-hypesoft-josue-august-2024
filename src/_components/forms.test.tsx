// src/_components/Formulario.test.tsx

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Formulario from './forms';

describe('Formulario Component', () => {
  it('should render the form fields and submit button', () => {
    render(<Formulario />);
    
    // Verifica se os campos e o botão estão renderizados
    expect(screen.getByPlaceholderText('Full Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('E-Mail Address')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Subjects')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  it('should show validation errors when fields are left empty and submit is clicked', async () => {
    render(<Formulario />);
    
    // Simula o clique no botão de enviar sem preencher os campos
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

     // Aumenta o tempo limite se necessário
    jest.setTimeout(3000); // 10 segundos

    // Verifica se as mensagens de erro são exibidas
    expect(await screen.findByText('Este campo é obrigatório')).toBeInTheDocument();
  });

  it('should show success message on form submission', async () => {
    render(<Formulario />);
    
    // Preenche os campos do formulário
    fireEvent.input(screen.getByPlaceholderText('Full Name'), { target: { value: 'John Doe' } });
    fireEvent.input(screen.getByPlaceholderText('E-Mail Address'), { target: { value: 'john.doe@example.com' } });
    fireEvent.input(screen.getByPlaceholderText('Subjects'), { target: { value: 'Subject' } });
    fireEvent.input(screen.getByPlaceholderText('Message'), { target: { value: 'This is a message.' } });
    
    // Simula o clique no botão de enviar
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    // Verifica se a mensagem de sucesso é exibida
    await waitFor(() => {
      expect(screen.getByText('Mensagem enviada com sucesso!')).toBeInTheDocument();
    });
  });
});
