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

export default function CustomTable() {
  const emptyRows = Array.from({ length: 9 })

  const [page, setPage] = useState(0)
  const rowsPerPage = 10

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  interface Data {
    Cedula: number
    Nombres: string
    Apellidos: string
    Tel: number
    Correo: string
    State: 'Activo' | 'Pronto a vencer' | 'Pago Pendiente' | 'Cancelado'
    Actions: string
  }

  function createData(
    Cedula: number,
    Nombres: string,
    Apellidos: string,
    Tel: number,
    Correo: string,
    State: 'Activo' | 'Pronto a vencer' | 'Pago Pendiente' | 'Cancelado',
    Actions: string
  ): Data {
    return { Cedula, Nombres, Apellidos, Tel, Correo, State, Actions }
  }
  const rows = [
    createData(
      1005896583,
      'Maycol Andrey',
      'Galarza Celis',
      3124567890,
      'cuentacorreos200@gmail.com',
      'Activo',
      'Editar'
    ),
    createData(
      455,
      'Maycol Andrey',
      'Galarza Celis',
      3124567890,
      'cuentacorreos200@gmail.com',
      'Pronto a vencer',
      'Editar'
    ),
    createData(
      5555,
      'Maycol Andrey',
      'Galarza Celis',
      3124567890,
      'cuentacorreos200@gmail.com',
      'Pago Pendiente',
      'Editar'
    ),
    createData(
      9855,
      'Maycol Andrey',
      'Galarza Celis',
      3124567890,
      'cuentacorreos200@gmail.com',
      'Cancelado',
      'Editar'
    ),
  ]

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
                <TableCell align="right">{row.Tel}</TableCell>
                <TableCell align="right">{row.Correo}</TableCell>
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
            {emptyRows.map((_, index) => (
              <TableRow
                key={`empty-${index}`}
                sx={{
                  height: '36.14px',
                  '& td, & th': {
                    backgroundColor: '#FAF9F9', // Fondo blanco para filas vacías
                    color: '#070807',
                    fontFamily: 'var(--fuentes-principales)',
                    fontSize: '12px',
                    fontWeight: 400,
                    textAlign: 'center',
                    borderBottom: '1px solid black',
                  },
                  ...(index === emptyRows.length - 1 && {
                    // Verifica si es la última fila
                    '& td:first-of-type': {
                      borderBottomLeftRadius: '8px', // Aplica al primer TableCell de la última fila
                    },
                    '& td:last-child': {
                      //borderBottomRightRadius: '8px', // Aplica al último TableCell de la última fila
                    },
                    '& td': {
                      borderBottom: 'none', // Si necesitas una línea divisoria
                    },
                  }),
                }}
              >
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
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
