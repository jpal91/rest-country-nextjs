const cardcontent = {
    styleOverrides: {
        root: {
            overflowY: "auto",
            margin: 0,
            padding: 0,
            listStyle: "none",
            height: "100%",
            '&::-webkit-scrollbar': {
              width: '0.4em',
              height: '0.1em'
            },
            '&::-webkit-scrollbar-track': {
              boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
              webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgba(0,0,0,.1)',
              height: '2px',
              borderRadius: '5%'
            }
        }
    }
}

export default cardcontent