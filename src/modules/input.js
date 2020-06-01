import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

// 액션 타입을 정의할 때 앞에 리듀서의 이름도 같이 적어 준다. 가독성을 높이고 중복을 줄여준다.
const SET_INPUT = 'input/SET_INPUT';

// 액션을 생성하고 내보낸다.
export const setInput = createAction(SET_INPUT);

const initialState = Map({
    value: ''
});

// 리듀서를 생성하고 내보낸다.
export default handleActions({
    [SET_INPUT]: (state, action)=>{
        return state.set('value', action.payload)
    }
}, initialState);