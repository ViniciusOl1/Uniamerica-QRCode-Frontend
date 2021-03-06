import React, { useState, useEffect } from 'react';
import './index.css';
import Header from '../../components/Header';
import api from '../../services/api';

function Dashboard() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        async function loadStudents() {
            const response = await api('/frequencia');
            setStudents(response.data);
        }
        loadStudents();
    }, []);
  return (
    <>
    <Header />
    <meta http-equiv="refresh" content="10" />
    <div id="container">
        <aside>
            <h2>Marque sua presença</h2>
                <img src="https://uniamerica-qrcode-backend.herokuapp.com/aula/qrcode"
                alt="Marque sua Presença" />
        </aside>
        <main>
            <section class="presentes">
                <h2>Alunos Presentes</h2>
                {students.map(student => (
                <section key={student.id} class="presente-item">
                    <span>{student.fullname}</span>
                </section>
                ))}
            </section>
        </main>
    </div>
    </>
  );
}

export default Dashboard;
