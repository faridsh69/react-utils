import { clsx } from 'clsx'

import { Cell } from './components/Cell'
import { Column } from './components/Column'
import { TableProps } from './Table.types'
import styles from './Table.module.scss'

export const Table = (props: TableProps) => {
  const { columns, rows, height, insideForm = false } = props

  return (
    <div className={styles.tableContainer} style={{ height }}>
      <table className={clsx(styles.table, insideForm && styles.insideForm)}>
        <thead>
          <tr>
            {columns.map((column, columnIndex) => (
              <Column
                key={columnIndex}
                columns={columns}
                column={column}
                columnIndex={columnIndex}
              />
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(row => {
            return (
              <tr key={row.id}>
                {columns.map((column, columnIndex) => (
                  <Cell
                    key={column.id}
                    column={column}
                    columns={columns}
                    cells={row.cells}
                    columnIndex={columnIndex}
                  />
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
