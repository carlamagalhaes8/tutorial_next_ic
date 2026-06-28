import { Artigo } from "@/core/artigos";
import getArtigos from "@/services/artigos";

import { use } from "react";

export default function Artigos() {

    const artigos = use(

        getArtigos()
    );

    return (

        <div>
            <h1 className="text-2xl font-bold">
                Produções
            </h1>
            <ul>
                {
                    artigos.map(
                        (artigo: Artigo) => (
                        <li
                            className="flex flex-col gap-3 bg-slate-300 px-3 py-2 rounded-md mt-7"
                            key={artigo.producoes_id}
                        >
                            <p>
                                Artigo:
                                {artigo.nomeartigo}
                            </p>
                            <p>
                                ISSN:
                                {artigo.issn}
                            </p>
                            <p>
                                Ano:
                                {artigo.anoartigo}
                            </p>
                            <p>
                                Pesquisador:
                                {artigo.pesquisadores_id}
                            </p>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}