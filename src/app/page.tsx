'use client'

import { useState } from 'react'
import { perguntar } from '@/services/rag'

interface Artigo {
  titulo: string
  pesquisador: string
  ano: number
  similaridade: number
}

export default function Home() {

  const [question, setQuestion] = useState('')
  const [artigos, setArtigos] = useState<Artigo[]>([])
  const [loading, setLoading] = useState(false)

  async function buscar() {

    if (!question.trim()) return

    setLoading(true)

    try {

      const response = await perguntar(question)

      setArtigos(response)

    } catch (error) {

      console.error(error)
      setArtigos([])

    } finally {

      setLoading(false)

    }

  }

  function excluir() {

    setQuestion('')
    setArtigos([])

  }

  return (

    <div style={{ padding: '30px' }}>

      <h2>Busca Semântica de Artigos</h2>

      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Digite uma palavra-chave"
        style={{
          width: '400px',
          padding: '10px'
        }}
      />

      <button
        onClick={buscar}
        style={{ marginLeft: '10px' }}
      >
        Buscar
      </button>

      <button
        onClick={excluir}
        style={{ marginLeft: '10px' }}
      >
        Limpar
      </button>

      <br /><br />

      {loading && (
        <p>Buscando...</p>
      )}

      {!loading && artigos.length === 0 && question !== '' && (
        <p>Nenhum artigo encontrado.</p>
      )}

      {!loading && artigos.map((artigo, index) => (

        <div
          key={index}
          style={{
            border: '1px solid #ccc',
            padding: '15px',
            marginBottom: '15px',
            borderRadius: '8px'
          }}
        >

          <h3>{artigo.titulo}</h3>

          <p>
            <strong>Pesquisador:</strong> {artigo.pesquisador}
          </p>

          <p>
            <strong>Ano:</strong> {artigo.ano}
          </p>

          <p>
            <strong>Similaridade:</strong> {artigo.similaridade.toFixed(4)}
          </p>

        </div>

      ))}

    </div>

  )

}