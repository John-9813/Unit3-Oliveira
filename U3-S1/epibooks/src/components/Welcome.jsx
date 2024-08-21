import { Alert } from 'react-bootstrap'

const Welcome = () => {
  return (
    <div className="my-4">
      <Alert variant="success">
        <h1>Benvenuti su EpiBooks!</h1>
        <h2>Esplora la nostra collezione di libri e trova il tuo prossimo preferito.</h2>
      </Alert>
      <h5 className="text-center">In evidenzia</h5>
    </div>
  )
}

export default Welcome
