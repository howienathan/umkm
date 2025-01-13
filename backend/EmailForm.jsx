import React, { useState } from 'react';
import axios from 'axios';

const EmailForm = () => {
    const [formData, setFormData] = useState({
        to: 'iatsajojo@gmail.com',
        subject: '',
        text: 'anjay'
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/send-email', formData);
            if (response.data.success) {
                alert('Email sent successfully!');
            }
        } catch (error) {
            alert('Failed to send email.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>To:</label>
                <input
                    type="email"
                    name="to"
                    value={formData.to}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Subject:</label>
                <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Message:</label>
                <textarea
                    name="text"
                    value={formData.text}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Send Email</button>
        </form>
    );
};

export default EmailForm;
