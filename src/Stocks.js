import React from "react";
import "./App.css";
import { stockData } from "./data";


export const Stocks = () => {
  return (
    <>
      <div className="stock-container">
        {stockData.map((data, key) => {
            return (
                <div key={key}>
                <Stock
                key={key}
                aluno={data.aluno}
                labReserva={data.labReserva}
                diaReserva={data.diaReserva}
                horaReserva={data.horaReserva}
              />
                </div>
            );
            })}

      </div>
      
    </>
  );
};  

const Stock = ({ aluno, labReserva, diaReserva, horaReserva }) => {
    if (!aluno) return <div />;
    return (
      <table className="table" border={1}>
        <tbody>
          <tr>
            <td>
              <p><p>Aluno:</p> {aluno}</p>
            </td>
            <td>
              <p><p>N° Reserva:</p>{labReserva}</p>
            </td>
            <td>
              <p><p>Dia Reserva:</p>{diaReserva}</p>
            </td>
            <td>
              <p><p>Hora Reserva:</p>{horaReserva}</p>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };