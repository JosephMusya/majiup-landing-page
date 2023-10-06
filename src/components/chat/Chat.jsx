import React from 'react';
import './chat.css';
import { LuSendHorizonal } from 'react-icons/lu';

const Chat = () => {
    return (
        <div className='chat'>
            <strong>Leave us a message</strong>
            <div>
                <div className='subject'>
                    <label htmlFor="subject">Subject</label>
                    <select name="subject" id="subject">
                        <option value="careers">Careers</option>
                        <option value="investiment">Investiment</option>
                        <option value="help">Help</option>
                    </select>                    
                </div>
                <div className='message'>
                    <label htmlFor="message">Message</label>
                    <input type="text" id='message' />
                    <LuSendHorizonal style={{cursor:'pointer'}} size={18} color='gray' />
                </div>
            </div>
        </div>
    );
}

export default Chat;
