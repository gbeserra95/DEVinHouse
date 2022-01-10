
import propTypes from 'prop-types'

const Table = ({title, description, columns, data}) => {
  const thead = columns.map(column => <th>{column}</th>)

  console.log(data)

  const tbody = data.map(obj => <tr>{columns.map(column => <td>{obj[column]}</td>)}</tr>)

  return (
    <>
      <h2>
        {title}
      </h2>
      <p>
        {description}
      </p>
      <table className="myTable">
        <thead><tr>{thead}</tr></thead>
        <tbody>{tbody}</tbody>
      </table>
    </>
  )
}

Table.propTypes = {
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  columns: propTypes.array.isRequired,
  data: propTypes.array.isRequired
}

export default Table