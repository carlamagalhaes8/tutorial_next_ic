import { use } from "react";

import { Pesquisador } from "@/core/pesquisadores";
import getPesquisadores from "@/services/pesquisadores";

export default function Pesquisadores() {

    const pesquisadores = use(getPesquisadores());

    return (
        <div>
            <h1 className="text-2xl font-bold">
                Pesquisadores
            </h1>
            <ul className="flex flex-col gap-3 mt-7">
                {
                    pesquisadores.map(
                        (pesquisador: Pesquisador) => (
                        <li
                            className="flex flex-col gap-3 bg-slate-300 px-3 py-2 rounded-md"
                            key={pesquisador.pesquisadores_id}
                        >
                            <p
                                className="bg-slate-400 rounded-md p-2"
                            >
                                Nome:
                                {pesquisador.nome}
                            </p>
                            <p>
                                Lattes:
                                {pesquisador.lattes_id}
                            </p>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}