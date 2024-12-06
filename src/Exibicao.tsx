import {ReactNode} from "react";
import './Exibicao.css';


interface ExibicaoProps{
    abertura: Date;
    fechamento: Date;
    cercado: string;
    children?: ReactNode;
}

export default function Exibicao({
    abertura:inicio,
    fechamento:fim,
    cercado: local,
    children,

}:ExibicaoProps){
    return(
        <div className="exibição">
        <div className="inicio">Abertura: {inicio.toLocaleString()}</div>
        <div className="fim">Encerramento: {fim.toLocaleString()}</div>
        <div className="local">Local: {local.toLocaleString()}</div>
        <div className="animais">{children}</div>
        </div>
    );
}