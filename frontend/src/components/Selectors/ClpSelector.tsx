import {
    StyledCurrencyInput,
    CurrencyContainer,
    CurrencyImage,
    CurrencyAmountContainer,
    StyledAmountLabel,
    StyledAmountInput
} from "../../styles/CurrencyInput.styles";
import { getImageUrl } from "../../utils";

interface ClpSelectorProps {
    value: number;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ClpSelector: React.FC<ClpSelectorProps> = ({value, handleChange}) => { 
    return (
        <StyledCurrencyInput>
            <CurrencyContainer>
                <CurrencyImage
                    src={getImageUrl('CL')}
                    alt={'CL'}
                />
                CLP
            </CurrencyContainer>

            <CurrencyAmountContainer>
                <StyledAmountLabel>Cantidad:</StyledAmountLabel>
                <StyledAmountInput
                    type="number"
                    onChange={handleChange}
                    onFocus={(e) => e.target.select()}
                    value={value}
                />
            </CurrencyAmountContainer>
        </StyledCurrencyInput>
    );
}