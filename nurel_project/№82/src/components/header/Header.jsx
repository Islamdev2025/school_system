import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
           

            <h1>№82 Мектептин Расмий Сайты</h1>
            <p>Сунуш — Маалымат — Даттануу — Идея</p>

            <div className="school-icons">
                <img src="https://img.icons8.com/color/96/book.png" alt="Book" />
                <img src="https://img.icons8.com/color/96/pencil.png" alt="Pencil" />
                <img src="https://img.icons8.com/color/96/ruler.png" alt="Ruler" />
                <img src="https://img.icons8.com/color/96/school.png" alt="School" />
                <img src="https://img.icons8.com/color/96/teacher.png" alt="Teacher" />
            </div>
        </header>
    );
};

export default Header;
