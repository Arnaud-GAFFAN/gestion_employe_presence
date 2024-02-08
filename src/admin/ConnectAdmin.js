import React, {useRef, useState} from 'react';
import {Box, Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input} from "@chakra-ui/react";
import axios from "axios";

const ConnectAdmin = () => {


    const [input, setInput] = useState('')

    const handleInputChange = (e) => setInput(e.target.value)
    const isError = input === ''

    //Données du formulaire
    //Stockage dans les states

    const emailData = useRef(null);
    const passwordData = useRef(null);
    const [adminData , setAdminData] = useState([]);
    const [formData , setFormData] = useState({});

    const handleSubmit = (e) => {

        e.preventDefault();
        const email = emailData.current.value;
        const password = passwordData.current.value;

        // Stockage des donnes dans l'objet formData et déstructuration
        setFormData({
            email,
            password
        });

        emailData.current.value = "";
        passwordData.current.value = "";

        axios.get("http://localhost:3000/admin").then(res =>
        setAdminData(res.data));
        isAdmin();
    }

    const isAdmin = () => {
        const verification = adminData.some((admin) => {
            console.log(admin)
            return admin.email === formData.email ;
        } )

        if (verification === true){
            console.log("Super");
        }else{
            console.log("non");
        }
    }

    return (
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"} minHeight={"100vh"}>
            <Box boxShadow='2xl' rounded='md' bg='white' width={"450px"} p={5}>
                <form onSubmit={handleSubmit}>
                    <FormControl isInvalid={isError} margin={"20px 0"}>
                        <FormLabel>Email</FormLabel>
                        <Input type='email' value={input} onChange={handleInputChange} ref={emailData}/>
                        {!isError ? (
                            <FormHelperText>
                                Veuillez saisir un email correcte
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage>Email est requis.</FormErrorMessage>
                        )}
                    </FormControl>

                    <FormControl size='md' margin={"20px 0"}>
                        <FormLabel>Mot de passe</FormLabel>
                        <Input
                            pr='4.5rem'
                            type={'password'}
                            placeholder='Entrez votre mot de passe'
                            ref={passwordData}
                        />
                    </FormControl>
                    <Button colorScheme='blue' width={"100%"} type={'submit'}>Se connecter</Button>
                </form>
            </Box>
        </Box>
    );
}

export default ConnectAdmin;