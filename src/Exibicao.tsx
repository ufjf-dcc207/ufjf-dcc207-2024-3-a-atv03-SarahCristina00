import './Exibicao.css';

interface ExibicaoProps{
    inicio: Date;
    fim: Date;
    local: string;
}

export default function Exibicao({
    inicio,
    fim,
    local: cercado,

}:ExibicaoProps){
    return(
        <div className="exibição">
        <div className="inicio">Abertura: {inicio.toLocaleString()}</div>
        <div className="fim">Encerramento: {fim.toLocaleString()}</div>
        <div className="cercado">Local: {cercado.toLocaleString()}</div>
        </div>
    );
}