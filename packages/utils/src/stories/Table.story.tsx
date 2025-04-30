import { Table } from 'components/Table/Table'

import { TABLE_CELLS, TABLE_COLUMNS } from './extra/storiesData'
import styles from './Story.module.scss'

export const TableStory = () => {
  return (
    <div className={styles.story}>
      <h4>16 Table</h4>
      <Table
        columns={TABLE_COLUMNS}
        rows={[
          {
            id: 1,
            cells: TABLE_CELLS,
          },
          {
            id: 2,
            cells: TABLE_CELLS,
          },
          {
            id: 3,
            cells: TABLE_CELLS,
          },
        ]}
        height={400}
        // insideForm
        // isLoading={true} // @TODO
        // prefixCell={{
        //   show: true,
        //   width: 6,
        // }}
      />
    </div>
  )
}
