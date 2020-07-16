import React from "react"
import Table from "react-materialize/lib/Table";

export const RatingPage = () => {
  //TODO take from bd
  const ratingArr = [
    {name: 'Carlos', team: "Comandos", points: "25"},
    {name: 'Anton', team: "Trrreeeemmmor", points: "22"},
    {name: 'Bobrik', team: "Comandos", points: "21"},
    {name: 'Reshala', team: "Trrreeeemmmor", points: "26"},
    {name: 'MaLyShCaRlSoN', team: "Trrreeeemmmor", points: "22"},
    {name: 'Fifa na BMW', team: "Comandos", points: "200"},
    {name: 'I love nachos', team: "Greenfield", points: "34"},
    {name: 'Giger', team: "Comandos", points: "67"},
    {name: 'Maxim Pipetka', team: "Trrreeeemmmor", points: "1"},
    {name: 'Sergey iz ozona', team: "Comandos", points: "1"}
  ];
  return (
    <>
      <h3>Рейтинги команд и игроков:</h3>
      <Table>
        <thead>
        <tr>
          <th data-field="user">
            Игрок
          </th>
          <th data-field="team">
            Команда
          </th>
          <th data-field="points">
            Рейтинг
          </th>
        </tr>
        </thead>
        <tbody>
        {
          ratingArr.map((item) => {
            return (
              <tr key={item.name}>
                <td>
                  {item.name}
                </td>
                <td>
                  {item.team}
                </td>
                <td>
                  {item.points}
                </td>
              </tr>
            )
          })
        }

        </tbody>
      </Table>
    </>
  )
}