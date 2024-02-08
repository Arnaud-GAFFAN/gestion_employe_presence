import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Stack,
    Box,
} from '@chakra-ui/react'
import {NavLink} from "react-router-dom";

const Home = () => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const firstField = React.useRef()
    return (
        <>
            <Button colorScheme='teal' onClick={onOpen}>
                Create user
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='left'
                initialFocusRef={firstField}
                onClose={onClose}

            >
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader borderBottomWidth='1px'>
                        Options
                    </DrawerHeader>

                    <DrawerBody>
                        <Stack spacing='24px'>
                            <Box cursor={'pointer'} width={"100%"}>
                                <span style={{width: '30px', height: '20px', display: "inline-block"}}><i
                                    className="ri-list-unordered"></i></span>
                                <NavLink to={'/admin/addEmployers'}
                                >Enregistrer un nouvel Employé</NavLink>
                            </Box>
                            <Box cursor={'pointer'} width={"100%"}>
                                <span style={{width: '30px', height: '20px', display: "inline-block"}}><i
                                    className="ri-list-unordered"></i></span>
                                <NavLink to={'/admin/employersList'}
                                >Historique des employés</NavLink>
                            </Box>
                            <Box cursor={'pointer'} width={"100%"}>
                                <span style={{width: '30px', height: '20px', display: "inline-block"}}><i
                                    className="ri-list-unordered"></i></span>
                                <NavLink to={''}
                                >Historique des présences</NavLink>
                            </Box>
                            <Box cursor={'pointer'} width={"100%"}>
                                <span style={{width: '30px', height: '20px', display: "inline-block"}}><i
                                    className="ri-list-unordered"></i></span>
                                <NavLink to={''}
                                >Ajouter des jours fériés</NavLink>
                            </Box>

                        </Stack>
                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </>
    );
};

export default Home;