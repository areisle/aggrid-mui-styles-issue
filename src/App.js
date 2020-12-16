import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-material.css';
import { ClientSideRowModelModule } from '@ag-grid-community/all-modules';
import { AgGridReact } from '@ag-grid-community/react';
import { Button } from '@material-ui/core';
import { ThemeProvider } from './theme';


const MuiRenderer = () => {
    return <Button>Button in Table</Button>
}

const rows = [
    {}
];

const columnDefs = [
    { cellRenderer: 'MuiRenderer', colId: 'button', headerName: 'Column With Button' }
];

function App() {
    return (
        <div>
            <ThemeProvider>
                <Button>Button Outside</Button>
                <div className='ag-theme-material'>
                    <AgGridReact
                        columnDefs={columnDefs}
                        domLayout='autoHeight'
                        frameworkComponents={{
                            MuiRenderer,
                        }}
                        modules={[ClientSideRowModelModule]}
                        rowData={rows}
                    />
                </div>
            </ThemeProvider>
        </div>
    );
}

export default App;
