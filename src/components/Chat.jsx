import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

const Chat = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on('receive_message', (msg) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
        });
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        socket.emit('send_message', message);
        setMessage('');
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-xl font-bold mb-4">Chat</h2>
            <div className="mb-4">
                {messages.map((msg, index) => (
                    <div key={index} className="border-b border-gray-300 p-2">{msg}</div>
                ))}
            </div>
            <form onSubmit={sendMessage} className="flex">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="border border-gray-300 p-2 flex-grow rounded"
                />
                <button type="submit" className="bg-red-600 text-white p-2 rounded hover:bg-red-500 ml-2">
                    Send
                </button>
            </form>
        </div>
    );
};

export default Chat;