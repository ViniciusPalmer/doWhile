import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'


import {Container } from './styles';

export function Summary() {
    return(
        <Container>
            <div>
                <header>
                    <p>Entries</p>
                    <img src={incomeImg} alt="Entry" />
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Exits</p>
                    <img src={outcomeImg} alt="Entry" />
                </header>
                <strong>R$500,00</strong>
            </div>
            <div className='highligh-background'>
                <header>
                    <p>Entries</p>
                    <img src={totalImg} alt="Entry" />
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    );
}