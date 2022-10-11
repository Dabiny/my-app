import React, { useState } from "react";
// useState Hook 함수
export default function Counter() {
    // 값, 값을 변경할 때 쓰는 함수
    // useState인자에 초기 count값을 설정가능
    //const [count, setCount] = useState(0); // 원시타입을 변경할때 쓰는 useState
    //const [show, setShow] = useState(true);
    // + - * 랜덤 연산자
    const operators = ["+", "-", "*"];
    //const [operator, setOperator] = useState(operators[0]);

    const [info, setInfo] = useState({
        count: 0,
        show: true,
        operator: operators[0],
    });

    console.log(info);

    return (
    <div>
    <button onClick={() => {
        // setInfo(info.show)라고 해버리면 setInfo가 인자로받는 show와 비교대상이 같은 주소를 가리키기 때문에 
        // 상태값을 바꾸는것을 인지하지 못한다. 그렇기 떄문에 스프레드문법으로 펼처서 다시 새로운 객체에 넣어주고, show만 !로 바꿔서 설정해줘야한다. 
        setInfo({...info, show: !info.show});
    }}>S&H</button>
    <button onClick={() => {
        const idx = Math.floor(Math.random() * operators.length);
        // setOperator(operators[idx])
        setInfo({...info, operator: operators[idx]});
    }}>Random operator</button>
    <button onClick={() => {
        let result;
        if (info.operator === "+") result = info.count + 1;
        if (info.operator === "-") result = info.count - 1;
        if (info.operator === "*") result = info.count * 1;
        setInfo({...info, count: result});
    }}>
        {info.operator} Click
    </button>
    <br />
    {info.show && `Counter: ${info.count}`}
    </div>
    );
}

// 함수 컴포넌트는 함수일뿐이다.
// 함수 컴포넌트에서 내부적으로 상태를 관리해야하는 일이 필요하다. 
// 이 해결에서는 hook함수 useState를 사용해야한다. 
// setState는 컴포넌트의 re-rendering을 발생시킨다. 

// 불변성 : 변하지 않는 성질 (메모리값의 값을 직접 변경하지 않는다.)
// setState의 변경할 값을 넘겨서 그 값이 다르면 랜더링을하고 같으면 랜더링x
// 이전 state와 이후 state를 비교할때 얕은 비교를 하기 떄문이다.
// === 깊은비교, 객체 주소가 같다고 판단하면 얕은비교라고 한다. 

// 원시타입은 기본적으로 불변성을 가지고 있다. 메모리에 값 자체가 저장
// 참조타입은 불변성을 가지고 있지 않는다. 변수에 주소저장

// 참조타입을 setState할때 불변성을 가지도록 하면서 짜줘야한다.
// 