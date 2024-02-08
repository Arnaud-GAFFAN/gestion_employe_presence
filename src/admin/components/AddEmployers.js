import React, {useRef} from 'react';
import {Box, Button, FormControl, FormLabel, Heading, Input} from "@chakra-ui/react";
import axios from "axios";
import {NavLink} from "react-router-dom";

const AddEmployers = () => {

    const nameRef = useRef(null);
    const lastnameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const startTimeRef = useRef(null);
    const endTimeRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = nameRef.current.value;
        const lastName = lastnameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const startTime = startTimeRef.current.value;
        const endTime = endTimeRef.current.value;


        const employerData = {
            nom: name,
            prenom: lastName,
            email: email,
            password: password,
            heure_debut_entreprise: startTime,
            heure_fin_entreprise: endTime,
            id_admin: 1
        }


        axios.post("http://localhost:3000/employe", employerData)


        nameRef.current.value = "";
        lastnameRef.current.value = "";
        emailRef.current.value = "";
        passwordRef.current.value = "";
        startTimeRef.current.value = "";
        endTimeRef.current.value = "";
    }

    return (
        <div style={{minHeight:"100vh", display: "flex", alignItems: "center", justifyContent:"center"}}>
            <Box boxShadow='xl' p='6' rounded='md' bg='white' width={"700px"}>
                <form onSubmit={handleSubmit}>
                    <FormControl>
                        <FormLabel>Nom</FormLabel>
                        <Input type='text' ref={nameRef} />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Prenoms</FormLabel>
                        <Input type='text' ref={lastnameRef} />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input type='email' ref={emailRef} />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Mot de passe</FormLabel>
                        <Input type='password' ref={passwordRef} />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Heure debut Entreprise</FormLabel>
                        <Input type='time' ref={startTimeRef} />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Heure Fin entreprise</FormLabel>
                        <Input type='time' ref={endTimeRef} />
                    </FormControl>
                    <Button colorScheme='blue' width={"100%"} type={'submit'} marginTop={"15px"}>Enregistrer</Button>
                </form>
                <Box marginTop={"20px"} width={"100%"}>
                    <Button width={"100%"}>
                        <NavLink to={"/admin/employersList"}>Voir la liste des employés</NavLink>
                    </Button>
                </Box>
            </Box>

        </div>
    );
};

export default AddEmployers;