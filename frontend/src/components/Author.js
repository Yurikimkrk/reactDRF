const AuthorItem = ({author}) => {
  return (
    <tr>
      <td>
        {author.url}
      </td>
      <td>
        {author.name}
      </td>
      <td>
        {author.birthday_year}
      </td>
    </tr>
  )
}

const AuthorList = ({authors}) => {
  return (
    <table>
      <th>
        id
      </th>
      <th>
        name
      </th>
      <th>
        birth
      </th>
      {authors.map((author) => <AuthorItem author={author}/>)}
    </table>
  )
}

export default AuthorList