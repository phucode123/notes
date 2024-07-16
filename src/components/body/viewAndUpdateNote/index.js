import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from './viewNode.module.scss'; // Import file CSS module
import { LocalStorageContext } from "../../library/localStorage";
import formattedDate from '../../library/getDate';

export default function ViewUpdate({ idNote }) {
    const { notes, addNote, updateNote, deleteNote, addFavorite, viewNote } = useContext(LocalStorageContext);
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [olddate, setOldDate] = useState('');
   const [deleted, setDeleted] = useState(false);

    useEffect(() => {
        const note = notes.find(note => note.id == id);
        if (note) {
            setTitle(note.name);
            setContent(note.description);
            setOldDate(note.Date)
            setDeleted(note.deleted)
        }
    }, [id, notes]);

    const navigate = useNavigate();

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleUpdateNote = () => {
        const note = notes.find(note => note.id == id);
        const newNote = {
            id: note.id,
            name: title,
            description: content,
            favorite: note.favorite,
            deleted: note.deleted,
            Date: formattedDate
        };

        if (title !== '' && content !== '') {
            updateNote(parseInt(id), newNote);
            navigate('/');
        } else {
            alert('Bạn không được để trống!!!!');
        }
    };

    const handleCancelNote = () => {
        navigate('/');
    };

    const handleDeleteNote = () => {
        const note = notes.find(note => note.id == id);
        deleteNote(note.id);
        alert('Đã xoá note: ' + note.name);
        navigate('/');
    };
    const handleRecover=()=>{
        const note = notes.find(note => note.id == id);
        deleteNote(note.id);
        alert('Đã khôi phục note: ' + note.name);
        navigate('/');
    }

    return (
        <div className={styles.addNoteContainer}>
            <div className={styles.buttonGroup}>
                <button onClick={handleUpdateNote} className={styles.saveButton}>Lưu</button>
                <button onClick={handleCancelNote} className={styles.cancelButton}>Hủy</button>
                {
                   !deleted ? <button onClick={handleDeleteNote} className={styles.cancelButton}>Xoá</button> : 
                   <button onClick={handleRecover} className={styles.cancelButton} style={{backgroundColor: 'grey'}}>Khôi phục</button> 
                }
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
                ></textarea>
                <span className={styles.dateText}>Ngày tạo: {olddate}</span><br />
                <span className={styles.dateText}>Ngày ngày hôm nay: {formattedDate}</span>
                {/* Hiển thị ngày tạo ghi chú */}
            </div>
        </div>
    );
}