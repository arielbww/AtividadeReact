import { useState } from 'react'
// Importar o componente
import TextInput from "./componentes/TextInput"
// Importar App.module.css
import styles from './App.module.css'

function App() {
  // Valores dos campos (formulário controlado)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')

  // Dados exibidos após o envio (null = nada enviou ainda)
  const [enviado, setEnviado] = useState(null)

  function handleSubmit(e) {
    e.preventDefault() // impede o reload da página
    setEnviado({ nome, email, mensagem }) // guarda os dados p/ exibir abaixo
  }

  return (
    // Adicionar o componente
    <div className={styles.appContainner}>
      <h1>Formulário</h1>
      <form onSubmit={handleSubmit}>
        <TextInput
          placeholder="Seu nome."
          maxLength={125}
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <TextInput
          placeholder="Seu email."
          maxLength={125}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          placeholder="Sua mensagem."
          maxLength={125}
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      {/* Exibe os dados abaixo do formulário depois de enviar */}
      {enviado && (
        <div className={styles.resultado}>
          <h2>Dados enviados</h2>
          <p><strong>Nome:</strong> {enviado.nome}</p>
          <p><strong>Email:</strong> {enviado.email}</p>
          <p><strong>Mensagem:</strong> {enviado.mensagem}</p>
        </div>
      )}
    </div>
  )
}

export default App
