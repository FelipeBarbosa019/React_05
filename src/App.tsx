import "./App.css";
import Forms from "./components/Forms";
import { Button } from "./components/Button";
import ModalRender from "./components/ModalRender";
import "./components/Modal.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [modalOpen, setModal] = useState(false);
    const [data, setData] = useState({ hits: [] });
    const [query, setQuery] = useState("redux");

    function openModal() {
        setModal(true);
    }

    // Tentei utilizar o projeto TS que criamos de CRUD de usuários, porém tive problemas com CORS,
    // Mudei de API para realizar a entrega no prazo, mas pretendo ainda resolver o problema para juntar os dois projetos.

    // interface Register {
    //     email: string;
    //     password: string;
    // }

    //     const fetchData = async () => {
    //         const response = await window.fetch(
    //             "http://localhost:8080/login",
    //             {
    //                 method: "POST",
    //                 headers: {
    //                     "content-type": "application/json;charset=UTF-8",
    //                 },
    //                 // body: JSON.stringify({
    //                 //     email: "admin@gmail.com",
    //                 //     password: "123456",
    //                 // }),
    //             }
    //         );
    //         console.log(response);
    //     };
    //     fetchData();
    // }, []);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await axios(
    //             `http://hn.algolia.com/api/v1/search?query=${query}`
    //         );
    //         setData(result.data);
    //     };

    //     fetchData();
    // }, []);

    return (
        <div className="App">
            <header className="App-header">
                <Forms>
                    <input
                        type="text"
                        placeholder={"name"}
                        // value={name}
                        onBlur={(e) => {
                            const formData = new FormData();
                            formData.append(`name`, e.target.value);
                            console.log(`Nome: ${formData.get("name")}`);
                        }}
                    />
                    <input
                        type="text"
                        placeholder={"email"}
                        // value={email}
                        onBlur={(e) => {
                            const formData = new FormData();
                            formData.append(`email`, e.target.value);
                            console.log(`Email: ${formData.get("email")}`);
                        }}
                    />
                    <input
                        type="text"
                        placeholder={"pass"}
                        // value={pass}
                        onBlur={(e) => {
                            const formData = new FormData();
                            formData.append(`pass`, e.target.value);
                            console.log(`Senha: ${formData.get("pass")}`);
                        }}
                    />
                </Forms>
                <Button
                    onClick={() => {
                        openModal();
                        //REQUISIÇÃO:
                        // const fetchData = async () => {
                        //     const result = await axios(
                        //         `http://hn.algolia.com/api/v1/search?query=${query}`
                        //     );

                        //     console.log(result.data);
                        //     setData(result.data);
                        // };

                        // fetchData();
                    }}
                >
                    Confirmar
                </Button>
                {modalOpen ? (
                    <ModalRender onClose={() => setModal(false)}></ModalRender>
                ) : (
                    <></>
                )}
            </header>
        </div>
    );
}

export default App;
