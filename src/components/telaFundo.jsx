import "./telaFundo.css";

import { Link } from "react-router-dom";

function Fundo() {
  return (
    <div className="pagina">

      <Link to="/tutorial">
        <button>Tutorial</button>
      </Link>

      <Link to="/escolher-time">
        <button>Escolher time</button>
      </Link>

      <Link to="/configurar">
        <button>Configurações</button>
      </Link>

      <button>Sair</button>

    </div>
  );
}

export default Fundo;