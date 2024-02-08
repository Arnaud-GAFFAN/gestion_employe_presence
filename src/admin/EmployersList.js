import React, {useEffect, useState} from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer, Box, Button, Stack, Flex,
} from '@chakra-ui/react'
import axios from "axios";
import {AddIcon, ArrowForwardIcon, ChevronLeftIcon, EmailIcon} from "@chakra-ui/icons";
import {NavLink} from "react-router-dom";



const EmployersList = () => {

    const [employersData, setEmployerData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/employe").then((res) => setEmployerData(res.data))
    }, []);

    return (
        <TableContainer>
            <Table variant='striped' colorScheme='teal'>
                <TableCaption>Liste des Employés</TableCaption>
                <Thead>
                    <Tr>
                        <Th>id</Th>
                        <Th>nom</Th>
                        <Th>Prenom</Th>
                        <Th>Email</Th>
                        <Th>Heure Debut Entreprise</Th>
                        <Th>Heure Fin entreprise</Th>
                    </Tr>
                </Thead>
                <Tbody>

                        {
                            employersData.map((employer) => {
                                return <Tr>
                                    <Td>{employer.id}</Td>
                                    <Td>{employer.nom}</Td>
                                    <Td>{employer.prenom}</Td>
                                    <Td>{employer.email}</Td>
                                    <Td>{employer.heure_debut_entreprise}</Td>
                                    <Td>{employer.heure_fin_entreprise}</Td>
                                </Tr>
                            })
                        }
                </Tbody>
            </Table>

            <Flex direction='row' spacing={4}>
                <Button leftIcon={<ChevronLeftIcon />} colorScheme='teal' variant='solid'>
                    <NavLink to={'/admin/index'}>Aller à l'acceuil</NavLink>
                </Button>
                <Button rightIcon={<AddIcon />} colorScheme='teal' variant='outline'>
                    <NavLink to={'/admin/addEmployers'}>Enregistrer un nouvel employé</NavLink>

                </Button>
            </Flex>
        </TableContainer>
    );
};

export default EmployersList;