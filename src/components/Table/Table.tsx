import React from "react";
import '../../App.css';
import BaseButton, {IButton} from "../Buttons/BaseButton";

export interface IColumn {
    id: string,
    title: string
}

export interface ITable {
    columns: IColumn[],
    rows: {}[],
    actions: IButton[]
}

function Table(prop: ITable) {

    return (
        <table >
            <thead>
            <tr>

                {/*{prop}*/}
            </tr>
            </thead>
            <tbody>
                {prop.rows.map((row: object | any) => (
                    <tr>
                        {prop.columns.map((column: IColumn) => (
                            <td>{row[column.id]}</td>
                            // <td>asd</td>
                        ))}


                        {prop.actions.length > 0 &&

                        <th>
                            {prop.actions.map((action : IButton) => (
                                <BaseButton type={action.type} title={action.title}/>
                            ))}
                        </th>
                        }
                    </tr>
                ))}


            </tbody>
        </table>
    )

}

export default Table;