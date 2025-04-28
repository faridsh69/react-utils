import { Table } from 'components/Table/Table'

import { TABLE_COLUMNS, TABLE_ROWS } from './extra/storiesData'
import styles from './Story.module.scss'

export const TableStory = () => {
  return (
    <div className={styles.story}>
      <h4>16 Table</h4>
      <Table
        columns={TABLE_COLUMNS}
        rows={TABLE_ROWS}
        height={100}
        insideForm
        // isLoading={true} // @TODO
        // prefixCell={{
        //   show: true,
        //   width: 6,
        // }}
      />
    </div>
  )
}
