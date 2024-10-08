import {
    StyledOperationIndicator,
    StyledOperationButton,
    StyledArrow,
} from "../styles/OperationIndicator.styles";

// import arrow images
import arrow_send from '../assets/images/arrow_send.svg';
import arrow_receive from '../assets/images/arrow_receive.svg';


interface ClpSelectorProps {
    transactionType: string;
    otherCurrency: string;
    exchangeRate: number;
    setTransactionType: (value: string) => void;
}

export const OperationIndicator: React.FC<ClpSelectorProps> = (
    {
        transactionType,
        otherCurrency,
        exchangeRate,
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
        <StyledOperationIndicator>
            {transactionType === 'send' ?
            <>
                <h1>Enviar</h1>
                <StyledArrow src={arrow_send}/>
            </>
            :
            <>
                <h1>Recibir</h1>
                <StyledArrow src={arrow_receive}/>
            </>
            }
            <StyledOperationButton send={ transactionType !== 'send' } onClick={switchTransactionType}>Cambiar</StyledOperationButton>
            {
                exchangeRate !== 0 && otherCurrency !== undefined &&
                <>
                    <p>Taza de cambio:</p>
                    <p>{exchangeRate} CLP = 1 {otherCurrency}</p>
                </>
            }
            
        </StyledOperationIndicator>
    );
}