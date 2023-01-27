import counterReducer, {
  CounterState,
  increment,
  decrement,
  incrementByAmount,
} from '../src/features/counterSlider';

describe('counterReducer', () => {
  const initialState: CounterState = {
    value: 1,
  };
  it('should return the initial state', () => {
    expect(counterReducer(undefined, { type: undefined })).toEqual({
      value: 0,
    });
  });

  it('should return new initial state when pass a new initial state', () => {
    expect(counterReducer(initialState, { type: undefined })).toEqual({
      value: 1,
    });
  });
  it('should return new state to be added 1', () => {
    expect(counterReducer(initialState, increment)).toEqual({
      value: 2,
    });
  });
  it('should return new state to be minus 1', () => {
    expect(counterReducer(initialState, decrement)).toEqual({
      value: 0,
    });
  });
  it('should return new state to be added 5', () => {
    expect(counterReducer(initialState, incrementByAmount(5))).toEqual({
      value: 6,
    });
  });
});
