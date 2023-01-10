import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const counterValue = useCounterValue();
    const { increment, decrement, add } = useCounterActions();

    const handleInc = () => {
        increment();
    };

    const handleDec = () => {
        decrement();
    };

    const handleAdd = () => {
        add(5);
    };

    return (
        <div>
            <h1
                data-testid="value-title"
            >
                {`value = ${counterValue}`}
            </h1>
            <Button
                data-testid="increment-btn"
                onClick={handleInc}
                type="button"
                theme={ButtonTheme.OUTLINE}

            // eslint-disable-next-line i18next/no-literal-string
            >
                INC
            </Button>
            <Button
                data-testid="decrement-btn"
                onClick={handleDec}
                type="button"
                theme={ButtonTheme.OUTLINE}
            // eslint-disable-next-line i18next/no-literal-string
            >
                DEC
            </Button>
            <Button
                data-testid="add-btn"
                onClick={handleAdd}
                type="button"
                theme={ButtonTheme.OUTLINE}
            // eslint-disable-next-line i18next/no-literal-string
            >
                ADD 5
            </Button>
        </div>
    );
};
