import React from 'react';
import styles from './Card.module.scss';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReplayIcon from '@mui/icons-material/Replay';
import { Link } from 'react-router-dom';

export default function Card({ item, onFavoriteClick,  onDeleteContentClick }) {
    const { id, name, description} = item;

    return (
        <div className={`${styles.card} ${item.deleted ? styles.deleted : ''}`}>
            {/* Phần trái */}
            <div className={styles.cardLeft}>
                <div className={styles.cardTitle}>{name}</div>
                <div className={styles.cardContent}>{description}</div>
            </div>
            {/* Phần phải */}
            <div className={styles.cardRight}>
                <Link to={`/viewupdate/${id}`}>
                    <button className={styles.iconButton} aria-label="Xem nội dung">
                        <VisibilityOutlinedIcon />
                    </button>
                </Link>
                <button className={`${styles.iconButton} ${item.deleted ? styles.deleteicon : ''}`} aria-label="Xóa nội dung" onClick={() => onDeleteContentClick(id)}>
                    {!item.deleted ? <DeleteOutlineOutlinedIcon /> : <ReplayIcon />}
                </button>
                <button
                    className={styles.iconButton}
                    aria-label="Thêm vào mục yêu thích"
                    onClick={() => onFavoriteClick(id)}
                >
                    {item.favorite ? <FavoriteIcon style={{ color: 'red' }} /> : <FavoriteBorderOutlinedIcon />}

                </button>
            </div>
        </div>
    );
}
