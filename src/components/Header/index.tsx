import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { useContext } from 'react'

interface HeaderProps {
    onOpenNewTransactionModal: () => void

    toggleTheme(): void
}

export function Header({ onOpenNewTransactionModal, toggleTheme }: HeaderProps) {

    const { title } = useContext(ThemeContext)

    return (
        <Container>
            <Content>
                
                <img src={logoImg} alt="dt money"/>
                <Switch 
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={'#444'}
                onColor={'#f8f8f8'}
                />
                <button onClick={onOpenNewTransactionModal}>Nova transação</button>

                
            </Content>
        </Container>
    )
}