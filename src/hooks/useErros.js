import { useState } from "react";

function useErros(validacoes) {
	const stateInicial = criarEstadoInicial(validacoes);
	const [erros, setErros] = useState(stateInicial);

	function validarCampos(event) {
		const { name, value } = event.target;
		const novoState = { ...erros };
		novoState[name] = validacoes[name](value);
		setErros(novoState);
    }
    
	function possoEnviar() {
		for (let campo in erros) {
			if (!erros[campo].valido) {
				return false;
			}
		}
		return true;
    }
    
	return [erros, validarCampos, possoEnviar];
}

function criarEstadoInicial(validacoes) {
	const stateInicial = {};

	for (let campo in validacoes) {
		stateInicial[campo] = { valido: true, texto: "" };
	}

	return stateInicial;
}

export default useErros;
