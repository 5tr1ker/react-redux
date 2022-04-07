// Action 변수 만듭니다.
// Action의 이름에 접두사를 넣어서 다른 모듈과 중복되는것을 방지할 수 있습니다.
const DATA_INCREASE = 'count/INCREASE';
const DATA_DECREASE = 'count/DECREASE';
const DATA_SETTING = 'count/SETTING';

// 액션 함수
// 해당 함수가 실행되었을 때 액션이 실행될 수 있게 해줍니다.
export const increase = () => ({type: DATA_INCREASE});
export const decrease = () => ({type: DATA_DECREASE});
export const data_setting = (set) => ({type: DATA_SETTING , set}); 
// 인자도 같이 되었을때 하단 reducer 에서 action.set 으로 값을 이용할 수 있게 같이 보내줍니다.

//초기 값
const initdata = ({
    number: 1,
    setting: 1
});


//Reducer
// 함수명은 임의로 설정해도 됩니다.
// Reducer에게 state 값을 설정시켜 줍니다. 그러면 dispatch로 Action이 실행되면 해당 Reducer가 실행됩니다.
export default function reducer(state = initdata , action) {
    switch(action.type) {
        case DATA_SETTING:
            return {
                ...state ,  // 값 불변성 보장하기 위해 state 이전값을 같이 보내줍니다.
                setting: action.set
            }
        case DATA_INCREASE:
            return {
                ...state ,
                number : state.number + state.setting
            }
        case DATA_DECREASE:
            return {
                ...state ,
                number : state.number - state.setting
            }
        default:
            return state;
    }
}