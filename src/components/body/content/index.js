import Card from "../../library/Card";

import { useContext } from "react";
import { LocalStorageContext } from "../../library/localStorage";


export default function Content({ selectedTab }) {
    const { notes, deleteNote, addFavorite } = useContext(LocalStorageContext);
    function onFavoriteClick(id) {
        console.log("tha tim thang nay" + id);
        addFavorite(id);

    }
    function onDeleteContentClick(id) {
        console.log("dang xoa thang" + id);
        deleteNote(id)
    }
    function onViewContentClick(id) {
        console.log(id);

    }
    console.log(notes);
    // Lọc và chỉ trả về các ghi chú tương ứng với tab được chọn
    // const filterednotes = selectedTab === 0
    //     ? notes.filter(note => note.favorite) // Hiển thị các ghi chú ưa thích
    //     : selectedTab === 1
    //         ? notes.filter(note => !note.deleted) // Hiển thị các ghi chú không bị xóa
    //         : notes.filter(note => note.deleted); // Hiển thị các ghi chú đã bị xóa

    const filterednotes = selectedTab === 0
        ? notes.filter(note => note.favorite && !note.deleted) // Hiển thị các ghi chú ưa thích và không bị xóa
        : selectedTab === 1
            ? notes.filter(note => !note.deleted) // Hiển thị các ghi chú không bị xóa
            : notes.filter(note => note.deleted); // Hiển thị các ghi chú đã bị xóa


    return (
        <>
            {filterednotes.map(note => (
                note != null ? <Card item={note} onFavoriteClick={onFavoriteClick} onDeleteContentClick={onDeleteContentClick} onViewContentClick={onViewContentClick} /> : ''
            ))}
        </>
    );
}
