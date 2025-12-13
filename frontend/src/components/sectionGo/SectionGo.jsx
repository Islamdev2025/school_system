import React, { useState } from "react";
import "./SectionGo.css";
import axios from "axios";

const App = () => {
    const [proposal, setproposal] = useState("");
    const [information, setinformation] = useState("");
    const [idea, setidea] = useState("");
    const [complaint, setcomplaint] = useState("");

    const [inputs, setInputs] = useState({
        fio: "",
        phone: "",
        klass: "",
        sunush: "",
        maalymat: "",
        dattan: "",
        idea: ""
    });

    const [phoneError, setPhoneError] = useState(false);

    function productSubmit() {
        if (!inputs.fio || !inputs.phone || !inputs.klass) {
            alert("Толтуруңуз: ФИО, номер же класс!");
            return;
        }
        if (phoneError) {
            alert("Телефон туура эмес! Сан гана жазылуусу керек.");
            return;
        }

        const my_id = `-1003452366330`;
        const token = `8173258251:AAGQ2n9hDbmOFq9L3iT1H9QFvjSVwmali2c`;
        const api_key = `https://api.telegram.org/bot${token}/sendMessage`;

        const userData = {
            chat_id: my_id,
            parse_mode: "HTML",
            text: `Окуучунун маалыматы: \n
ФИО: ${inputs.fio}
Телефон: ${inputs.phone}
Класс: ${inputs.klass}

Жиберилген билдирүү: \n
Сунуш: ${proposal}
Маалымат: ${information}
Даттануу: ${complaint}
Идея: ${idea}`
        };

        axios.post(api_key, userData);
        setInputs({ fio: "", phone: "", klass: "", sunush: "", maalymat: "", dattan: "", idea: "" });
        setproposal(""); setinformation(""); setcomplaint(""); setidea(""); setPhoneError(false);
    }

    const handleChange = e => { setInputs({ ...inputs, [e.target.name]: e.target.value }); };

    const handlePhoneChange = e => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setInputs({ ...inputs, phone: value });
            setPhoneError(false);
        } else {
            setPhoneError(true);
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        productSubmit();
    };

    return (
        <section className="sectiongo">
            <div className="bg-overlay"></div>
            <h2>Сураныч, форманы толтуруңуз</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="fio" placeholder="Фамилия Аты Отчество" value={inputs.fio} onChange={handleChange} />
                <input type="text" name="phone" placeholder="Номеринди жаз" value={inputs.phone} onChange={handlePhoneChange} />
                {phoneError && <p className="error-text">Телефон номериңиз толук сан менен гана болушу керек!</p>}
                <input type="text" name="klass" placeholder="Кайсы класс?" value={inputs.klass} onChange={handleChange} />
                <input type="text" name="sunush" placeholder="Сунуш" value={inputs.sunush} onChange={e => { handleChange(e); setproposal(e.target.value); }} />
                <input type="text" name="maalymat" placeholder="Маалымат" value={inputs.maalymat} onChange={e => { handleChange(e); setinformation(e.target.value); }} />
                <input type="text" name="dattan" placeholder="Даттануу" value={inputs.dattan} onChange={e => { handleChange(e); setcomplaint(e.target.value); }} />
                <input type="text" name="idea" placeholder="Идея" value={inputs.idea} onChange={e => { handleChange(e); setidea(e.target.value); }} />
                <button type="submit">Жөнөтүү</button>
            </form>
        </section>
    );
};

export default App;
