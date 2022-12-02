import { Box, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import {memo,VFC} from "react";

type Props = {
    id:number;
    imageUrl:string;
    userName:string;
    fullName:string;
    onClick: (id:number) => void;
}

export const UserCard: VFC<Props> = memo((props) =>{
    const {imageUrl,userName,fullName,onClick,id} = props;
    return(
        <Box p={4} _hover={{cursor:"pointer",opacity:0.8}} w="260px" h="260px" bg="white" borderRadius="10px" shadow="md" onClick={() => onClick(id)}>
            <Stack textAlign="center">
                <Image boxSize="160px" alt={userName} m="auto" borderRadius="full" src={imageUrl}/>
                <Text fontSize="lg" fontWeight="bold">{userName}</Text>
                <Text fontSize="sm" color="gray">{fullName}</Text>
            </Stack>
        </Box>
    );
});