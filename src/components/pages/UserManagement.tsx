import { Center, Spinner, Wrap, WrapItem } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { memo, VFC } from "react";
import { useAllUsers } from '../../hooks/useAllUsers';
import { UserCard } from '../oganisms/user/UserCard';

export const UserManagement: VFC = memo(() =>{
    const {getUsers,users,loading} = useAllUsers();
    useEffect(() => getUsers(),[getUsers]);
    return (
        <>
            {loading ? (
            <Center h="100vh">
                <Spinner />
            </Center>) : (
            <Wrap p={{base:4,md:10}}>
                {users.map((user) =>(
                    <WrapItem key={user.id} mx="auto">
                        <UserCard userName={user.username} fullName={user.name} imageUrl='https://images.unsplash.com/photo-1669554108285-dc5c2786ed61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2815&q=80a' />
                    </WrapItem>
                ))}
            </Wrap>
            )}
        </>
    );
});
