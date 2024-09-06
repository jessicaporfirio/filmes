export default function Cabecalho(props) {
    return (
      <>
        <div>
          <h1 className="text-danger">{props.titulo}</h1>
          <p>{props.subtitulo}</p>
        </div>
      </>
    );
  }