import React, { memo } from 'react'
import Pagination from '@mui/material/Pagination';

import styles from './styles.module.scss'

const CustomPagination = ({currentPage, onPageChange, pageCount}) => {
        return (
                <div className={styles.pagination} >
                        <Pagination variant='outlined'  
                count={pageCount} 
                page={currentPage} 
                onChange={(event, page) => onPageChange(page)} />
                </div>
                
        )
}

export default memo(CustomPagination)
