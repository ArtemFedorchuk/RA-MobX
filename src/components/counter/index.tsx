import { observer } from "mobx-react-lite";
import CounterStore from "../../stores/counter-store";

export const Counter = observer(() => {
    const { count, total, increment, decrement } = CounterStore;

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <button onClick={() => decrement(1)}>-</button>
            <pre>{count}</pre>
            <button onClick={() => increment(1)}>+</button>
        </div>
    );
});

export default Counter;
