import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
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
                onClick={increment}
                type="button"
                theme={ButtonTheme.OUTLINE}

            // eslint-disable-next-line i18next/no-literal-string
            >
                INC
            </Button>
            <Button
                data-testid="decrement-btn"
                onClick={decrement}
                type="button"
                theme={ButtonTheme.OUTLINE}
            // eslint-disable-next-line i18next/no-literal-string
            >
                DEC
            </Button>
        </div>
    );
};
