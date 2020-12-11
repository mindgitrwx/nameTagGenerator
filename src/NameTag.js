import React from 'react';

var NameTag = props => {
  var deleteByIndex = () => props.removeName(props.index);
  return (
    <div className='name-tag'>
      <h2 className='index'>{props.index}</h2>
      <h1 className='title'>HELLO</h1>
      <p className='subtitle'>my name is</p>
      <h2 className='name'>{props.name}</h2>
      <h2 className='color'>{props.color}</h2>
      <span onClick={deleteByIndex} className='name-tag__delete'>
          delete
      </span>
    </div>
  );
};

export default NameTag;
