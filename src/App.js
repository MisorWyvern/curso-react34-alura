import {
	Container,
	createMuiTheme,
	ThemeProvider,
	Typography,
} from "@material-ui/core";
import purple from "@material-ui/core/colors/purple";
import "fontsource-roboto";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";

function App() {
	return (
		<Container component="article" maxWidth="sm">
			<ThemeProvider theme={theme}>
				<Typography variant="h3" component="h1" align="center">
					Formulário de Cadastro
				</Typography>
				<FormularioCadastro validarCPF={validarCPF} aoEnviar={aoEnviarForm} />
			</ThemeProvider>
		</Container>
	);
}

function aoEnviarForm(dados){
  console.log(dados);
}

const theme = createMuiTheme({
	palette: {
		primary: {
			main: purple[500],
		},
		secondary: {
			main: '#d500f9',
		},
	},
});

function validarCPF(cpf){
	if(cpf.length !== 11){
		return {valido: false, texto: "CPF deve ter 11 digitos."}
	}
	return {valido: true, texto: ""}
}

export default App;
