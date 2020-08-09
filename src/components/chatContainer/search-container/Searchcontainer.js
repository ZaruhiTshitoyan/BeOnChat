import React from 'react';
import './search-container.css';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

function SearchContainer(){
    return(
        <div className={'search-container'}>
            <Paper component="form" >
                <IconButton aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <InputBase
                    placeholder="Search"
                />
                <IconButton type="submit"  aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
            {/*<input type={'text'} placeholder={'Search'} />*/}
        </div>
    );
}

export default SearchContainer;