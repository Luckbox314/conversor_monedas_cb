import { StyledCurrencyInput } from "../styles/CurrencyInput.styles";

interface ClpSelectorProps {
    transactionType: string;
    setTransactionType: (value: string) => void;
}

export const OperationIndicator: React.FC<ClpSelectorProps> = (
    {
        transactionType,
        setTransactionType
    }
) => {
    const switchTransactionType = () => {
        if (transactionType === 'send') {
            setTransactionType('receive');
        } else {
            setTransactionType('send');
        }
    }

    return (
        <StyledCurrencyInput>
            {transactionType === 'send' ? <h2>Enviar</h2> : <h2>Recibir</h2>}
            {transactionType === 'send' ? <h3>{'-->'}</h3> : <h3>{'<--'}</h3>}
            <button onClick={switchTransactionType}>Invertir</button>
        </StyledCurrencyInput>
    );
}