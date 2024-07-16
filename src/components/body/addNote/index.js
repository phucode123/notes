import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './addNote.module.scss'; // Import file CSS module
import { LocalStorageContext } from "../../library/localStorage";
import formattedDate from '../../library/getDate';

export default function AddNote() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const {  addNote } = useContext(LocalStorageContext);

    const navigate = useNavigate();

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleSaveNote = () => {
        // Xử lý logic khi người dùng lưu ghi chú
        const newNote = {
            'name': title,
            'description': content,
            'favorite': false,
            'deleted': false,
            'Date': formattedDate
        }
        if (title != '' && content != '') {
            addNote(newNote);
            navigate('/');
        }
        else{
            alert('Bạn không được để trống!!!!')
        }
    };

    const handleCancelNote = () => {
        navigate('/');
    };

    return (

        <div className={styles.addNoteContainer}>
            <div className={styles.buttonGroup}>
                <button onClick={handleSaveNote} className={styles.saveButton}>Lưu</button>
                <button onClick={handleCancelNote} className={styles.cancelButton}>Hủy</button>
            </div>
            <div className={styles.contentText}>
                <label htmlFor="noteTitle" className={styles.inputLabel}>Tiêu đề:</label>
                <input
                    type="text"
                    id="noteTitle"
                    value={title}
                    onChange={handleTitleChange}
                    className={styles.textInput}
                />

                <label htmlFor="noteContent" className={styles.inputLabel}>Nội dung:</label>
                <textarea
                    id="noteContent"
                    value={content}
                    onChange={handleContentChange}
                    className={styles.textArea}
                >
                </textarea>
                <span className={styles.dateText}>{formattedDate}</span>
                {/* Hiển thị ngày tháng năm */}
            </div>

        </div>

    );
}