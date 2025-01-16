import {
  Table,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  TableHead,
  TableBody,
  TablePagination,
} from '@mui/material'
import './globals.css'
import { useState } from 'react'
import Image from 'next/image'
import styles from './page.module.css'

interface Data {
  Cedula: string
  Nombres: string
  Apellidos: string
  Telefono: string
  'Correo electronico': string
  State: 'Activo' | 'Pronto a vencer' | 'Pago Pendiente' | 'Cancelado'
  Actions: string
}

interface CustomTableProps {
  rows: Data[]
}
export default function CustomTable({ rows }: CustomTableProps) {
  const [page, setPage] = useState(0)
  const rowsPerPage = 10

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const visibleRows = rows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  )

  const stateStyles = {
    Activo: {
      backgroundColor: 'rgba(76, 175, 80, 0.2)',
      color: '#4CAF50',
      border: '1px solid #4CAF50',
    },
    'Pronto a vencer': {
      backgroundColor: 'rgba(255, 235, 59, 0.2)',
      color: '#D6A800',
      border: '1px solid #FFEB3B',
    },
    'Pago Pendiente': {
      backgroundColor: 'rgba(255, 152, 0, 0.2)',
      color: '#FF9800',
      border: '1px solid #FF9800',
    },
    Cancelado: {
      backgroundColor: 'rgba(244, 67, 54, 0.2)',
      color: '#F44336',
      border: '1px solid #F44336',
    },
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow
              sx={{
                height: '49px',
                '& td, & th': {
                  backgroundColor: '#070807',
                  color: '#ffffff',
                  fontFamily: 'var(--fuentes-principales) !important',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  textAlign: 'center',
                },
              }}
            >
              <TableCell
                sx={{
                  borderTopLeftRadius: '8px',
                }}
              >
                Cédula
              </TableCell>
              <TableCell align="right">Nombres</TableCell>
              <TableCell align="right">Apellidos</TableCell>
              <TableCell align="right">Télefono</TableCell>
              <TableCell align="right">Correo&nbsp;electronico</TableCell>
              <TableCell align="right">Estado</TableCell>
              <TableCell
                align="right"
                sx={{
                  borderTopRightRadius: '8px',
                }}
              >
                Acciones
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleRows.map((row) => (
              <TableRow
                key={row.Cedula}
                sx={{
                  height: '36.14px',
                  '& td, & th': {
                    backgroundColor: '#FAF9F9',
                    color: '#070807',
                    fontFamily: 'var(--fuentes-principales)',
                    fontSize: '12px',
                    fontWeight: 600,
                    textAlign: 'center',
                    borderBottom: '1px solid black',
                  },
                }}
              >
                <TableCell component="th" scope="row">
                  {row.Cedula}
                </TableCell>
                <TableCell align="right">{row.Nombres}</TableCell>
                <TableCell align="right">{row.Apellidos}</TableCell>
                <TableCell align="right">{row.Telefono}</TableCell>
                <TableCell align="right">{row['Correo electronico']}</TableCell>
                <TableCell
                  sx={{
                    padding: '4px 8px',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      ...(stateStyles[row.State] || {
                        backgroundColor: 'transparent',
                        color: 'inherit',
                        border: 'none',
                      }),
                      borderRadius: '4.07px',
                      padding: '4px',
                      display: 'inline-block',
                      textAlign: 'center',
                      width: '89px',
                      height: '23.42px',
                      minWidth: '80px',
                      fontSize: '10.37px',
                    }}
                  >
                    {row.State}
                  </div>
                </TableCell>
                <TableCell>
                  <div className={styles.conteinerActions}>
                    <button className={styles.btnActions}>
                      <Image
                        src="/Images/edit.png"
                        alt="Editar"
                        width={25}
                        height={25}
                      />
                    </button>
                    <button className={styles.btnActions}>
                      <Image
                        src="/Images/pay.png"
                        alt="pay"
                        width={25}
                        height={25}
                      />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div>
          <TablePagination
            component="div"
            count={rows.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            labelRowsPerPage=""
            rowsPerPageOptions={[]}
            labelDisplayedRows={({ from, to, count }) =>
              `${from} - ${to} de ${count !== -1 ? count : `más de ${to}`}`
            }
            sx={{ width: '100%', alignItems: 'flex-end' }}
          />
        </div>
      </TableContainer>
    </>
  )
}
