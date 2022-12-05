import { Center,Spinner, useDisclosure, Wrap, WrapItem } from '@chakra-ui/react';
import React, { useCallback, useEffect } from 'react'
import { memo, VFC } from "react";
import { useAllUsers } from '../../hooks/useAllUsers';
import { useLoginUser } from '../../hooks/useLoginUser';
import { useSelectUser } from '../../hooks/useSelectUser';
import { UserCard } from '../oganisms/user/UserCard';
import { UserDetailModal } from '../oganisms/user/UserDetailModal';

export const UserManagement: VFC = memo(() =>{
    const {isOpen,onOpen,onClose} = useDisclosure();
    const {getUsers,users,loading} = useAllUsers();
    const {onSelectUser,selectedUser} = useSelectUser();
    const { loginUser } = useLoginUser();

    useEffect(() => getUsers(),[getUsers]);
    const onClickUser = useCallback((id:number) => {
        onSelectUser({id,users,onOpen});
    },[onOpen,onSelectUser,users]);
    return (
        <>
            {loading ? (
            <Center h="100vh">
                <Spinner />
            </Center>) : (
            <Wrap p={{base:4,md:10}}>
                {users.map((user) =>(
                    <WrapItem key={user.id} mx="auto">
                        <UserCard id={user.id} userName={user.username} onClick={onClickUser} fullName={user.name} imageUrl='https://images.unsplash.com/photo-1669554108285-dc5c2786ed61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2815&q=80a' />
                    </WrapItem>
                ))}
            </Wrap>
            )}
            <UserDetailModal isOpen={isOpen} onClose={onClose} user={selectedUser} isAdmin={loginUser?.isAdmin}/>
        </>
    );
});
