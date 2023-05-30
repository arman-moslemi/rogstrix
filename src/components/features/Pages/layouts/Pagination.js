import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function PaginationCustom({setPage,count}) {
  return (
    <Stack spacing={5}>
      <Pagination
        count={count!=0?count:5}
        variant="outlined" shape="rounded"
        onChange={(e,page)=>setPage(page)}
        renderItem={(item) => (
          <PaginationItem
            components={{ previous: ArrowForwardIcon, next: ArrowBackIcon }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}