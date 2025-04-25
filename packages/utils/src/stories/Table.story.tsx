import { Table } from 'components/Table/Table'

import { _TABLE_COLUMNS, _TABLE_ROWS } from './extra/storiesData'
import styles from './Story.module.scss'

export const TableStory = () => {
  return (
    <div className={styles.story}>
      <h4>20 Table</h4>
      <Table
        columns={_TABLE_COLUMNS}
        rows={_TABLE_ROWS}
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
