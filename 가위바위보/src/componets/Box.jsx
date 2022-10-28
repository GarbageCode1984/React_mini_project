import React from 'react';

const Box = (props) => {
    let result;
    if (
        props.title === 'Computer' &&
        props.result !== '비김' &&
        props.result !== ''
        //컴퓨터쪽, 비기지 않았고, 결과값이 비어있지 않을때
    ) {
        result = props.result === '승리!' ? '패배...' : '승리!';
        //내 승패여부가 승리였을때는 '패배...'으로 바뀌고 아니였을때는 '승리!'로 바뀜
    } else {
        result = props.result;
    }

    return (
        <div className="box">
            <h1>{props.title}</h1>
            <img src={props.item && props.item.img} className="item-img" />
            <h2>{result}</h2>
        </div>
    );
};

export default Box;
