import React, { useState, useEffect } from 'react';
import fakeAPI from '../../../fakeAPI';
// Tạo một context để chứa trạng thái và các hàm tương tác với local storage
export const LocalStorageContext = React.createContext();

export const LocalStorageProvider = ({ children }) => {
    const [notes, setNotes] = useState(fakeAPI.listNotes);

    console.log(notes);
    // Load dữ liệu từ local storage khi component được tạo
    useEffect(() => {
        const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
        setNotes(storedNotes);
    }, []);

    // Lưu dữ liệu vào local storage mỗi khi có thay đổi
    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    // Hàm thêm ghi chú mới
    // const addNote = (newNote) => {
    const addNote = (newNote) => {
        setNotes((notes) => {
            const existingNotes = notes || [];
            const maxId = existingNotes.reduce((max, note) => (note.id > max ? note.id : max), 0);
            const newId = maxId + 1;

            const updatedNotes = [...existingNotes, { ...newNote, id: newId }];
            localStorage.setItem('notes', JSON.stringify(updatedNotes));
            console.log('Ghi chú đã được lưu:', updatedNotes);

            return updatedNotes;
        });

    };
    // setNotes([...notes, newNote]);
    // };

    // Hàm cập nhật ghi chú
    const updateNote = (id, updatedNote) => {
        const updatedNotes = notes.map(note => (note.id === id ? updatedNote : note));
        setNotes(updatedNotes);
    };

    // Hàm xóa ghi chú
    const deleteNote = (id) => {
        const updatedNotes = notes.map(note => {
            if (note.id === id) {
                return { ...note, deleted: !note.deleted, favorite: false };
            }
            return note;
        });
        setNotes(updatedNotes);
    };
    const addFavorite = (id) => {
        const favorites = notes.map(note => {
            if (note.id === id) {

                return { ...note, favorite: !note.favorite };
            }
            return note;
        });
        setNotes(favorites);
    }

    const viewNote = (id) => {
        return notes.find(note => note.id === id);
    };


    return (
        <LocalStorageContext.Provider value={{ notes, addNote, updateNote, deleteNote, addFavorite, viewNote }}>
            {children}
        </LocalStorageContext.Provider>
    );
};
