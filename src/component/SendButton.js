import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

const SendButton = ({ sendChat }) => {
  return (
    <>
      <FontAwesomeIcon className='sendIcon' icon={faPaperPlane} onClick={e => sendChat()} />
    </>
  )
}

export default SendButton
