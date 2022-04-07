import { useDispatch, useSelector } from "react-redux";
import { data_setting, decrease, increase } from "./myreduce_module";
import MyProps from "./todomodules";


const Myreduce = () => {
    // useSelector는 reducer의 store안에 값을 가져오는데 사용합니다.
    const {number , setting} = useSelector(state => ({
        number: state.reducer.number , // 중간에 변수명은 최상위 store 에서 reducer 인자로 전달한 이름을 그대로 넣어줍니다. ( App.js 참조)
        setting: state.reducer.setting // module 에서 설정한 변수명과 동일해야합니다.
    }));

  // 상태값을 update 하기위해 dispatch 함수를 가져옵니다.
  const dispatch = useDispatch(); 

  // dispatch 인자에 module에서 실행할 export 한 액션 함수명을 넣습니다.
  const onIncrease = () => dispatch(increase()); 
  const onDecrease = () => dispatch(decrease());
  const onSets = set => dispatch(data_setting(set));
    return(<MyProps
        number={number}
        diff={setting}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        setting={onSets}
      />)
}

export default Myreduce;