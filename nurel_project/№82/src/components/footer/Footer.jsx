import React, { useEffect, useState } from "react";
import "./Footer.css";

const Footer = () => {
    const [qr, setQr] = useState("");

    useEffect(() => {
        const siteURL = "https://myschool82.kg";
        const qrLink = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${siteURL}`;
        setQr(qrLink);
    }, []);

    return (
        <footer className="footer">

            {/* QR КОД — АЛДЫНДА */}
            <div className="qr-container">
                <img src={qr} alt="QR Code" className="qr-code" />
            </div>

            <div className="footer-info">
                <h3>№82 Мектеп</h3>
                <p>1998-жылы негизделген</p>
            </div>

            <div className="socials">
                <a href="https://www.tiktok.com/@82schoolbish" target="_blank" rel="noreferrer">
                    TikTok: 82schoolbish
                </a>
                <a href="https://www.instagram.com/82_school_official/" target="_blank" rel="noreferrer" className="insta">
                    Instagram: 82_school_official
                </a>
            </div>

            <div className="header-top">
                <div className="author-info">
                    Бул сайтты жазган: Өмүрбеков Нурел 9-з 2025-2026 жыл
                </div>
                <div className="social-links">
                    <a href="https://www.instagram.com/nurel.omurbekov.dev/" target="_blank" rel="noreferrer">Instagram: Nurel_Dev</a>
                    <a href="https://www.instagram.com/209_nurel/" target="_blank" rel="noreferrer">Instagram: 209_nurel</a>
                    <a href="https://www.tiktok.com/@_omurbek0v_0" target="_blank" rel="noreferrer">TikTok</a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
