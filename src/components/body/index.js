import Content from "./content"
import styles from './Body.module.scss';
import { Route, Routes } from 'react-router-dom'
import AddNote from "./addNote";
import ViewUpdate from "./viewAndUpdateNote";


export default function Body({ selectedTab }) {
    return (
        <div className={styles.wrapper} >
            <Routes>
                <Route path="/" element={<Content selectedTab={selectedTab} />} />
                <Route path="/addnote" element={<AddNote />} />
                <Route path="/viewupdate/:id" element={<ViewUpdate />} />
            </Routes>
        </div>
    )
}