import { HamburgerIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import React from 'react'
import {memo,VFC} from "react";

type Props = {
    onOpen: () => void;
}

export const MenuIcomButton: VFC<Props> = memo((props) =>{
    const {onOpen} = props;
    return(
        <IconButton aria-label='メニューボタン' size="sm" icon={<HamburgerIcon />} variant="unstyled" display={{base:"block",md:"none"}} onClick={onOpen} />
    );
});