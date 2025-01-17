import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../src/components/FormularioAgendarRetorno/formularioagendarretorno.module.css"
import {Header03} from "../src/components/Header/header";
import Footer from "../src/components/Footer/Footer";
import AgendarRetorno from "../src/components/FormularioAgendarRetorno/formularioagendarretorno"
import Calendario from "../src/components/Calendario/calendario"

function PageAgendarRetorno(){
    return(
        <div>
            <Header03/>
            <div>
                <h1 className={styles.titulocadastro}>Agendar Retorno</h1>
            </div>
        <AgendarRetorno/>
        <Footer/>
        </div>
    )
}

export default PageAgendarRetorno;